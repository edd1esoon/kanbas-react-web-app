import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../styles.css";
import { RootState } from "../../store";
import { addAssignment, updateAssignment } from "./reducer";

interface AssignmentEditorProps {
  cid: string; // Course ID
  aid?: string; // Assignment ID (optional for creating new assignments)
}

export default function AssignmentEditor({ cid, aid }: AssignmentEditorProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch existing assignment data from Redux store
  const assignment = useSelector((state: RootState) =>
    state.assignments.assignments.find(
      (assignment) => assignment._id === aid && assignment.course === cid
    )
  );

  // State to manage assignment data
  const [assignmentName, setAssignmentName] = useState(assignment?.title || "");
  const [description, setDescription] = useState(assignment?.description || "");
  const [points, setPoints] = useState(
    assignment?.points ? Number(assignment.points.replace(" pts", "")) : 0
  );
  const [dueDate, setDueDate] = useState(assignment?.due || "");
  const [availableDate, setAvailableDate] = useState(
    assignment?.availability || ""
  );

  const handleSave = () => {
    const newAssignment = {
      _id: aid || new Date().getTime().toString(), // Generate new ID for new assignment
      title: assignmentName,
      description,
      points: `${points} pts`,
      due: dueDate,
      availability: availableDate,
      course: cid,
    };

    if (aid) {
      dispatch(updateAssignment(newAssignment)); // Update existing assignment
    } else {
      dispatch(addAssignment(newAssignment)); // Add new assignment
    }

    navigate(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-4 border rounded shadow-sm">
      <h3>{aid ? "Edit Assignment" : "New Assignment"}</h3>
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label fw-bold">
          Assignment Name
        </label>
        <input
          id="wd-name"
          value={assignmentName}
          onChange={(e) => setAssignmentName(e.target.value)}
          className="form-control"
        />
      </div>

      {/* Other fields... */}

      <div className="mt-4 d-flex justify-content-end">
        <button
          className="btn btn-secondary me-2"
          onClick={() => navigate(`/Courses/${cid}/Assignments`)}
        >
          Cancel
        </button>
        <button className="btn btn-danger" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
