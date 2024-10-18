import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as db from "../../Database"; // Assuming assignments are in the Database
import "../../styles.css";

interface AssignmentEditorProps {
  cid: string; // Course ID
  aid: string; // Assignment ID
}

export default function AssignmentEditor({ cid, aid }: AssignmentEditorProps) {
  const navigate = useNavigate();

  // State to manage assignment data
  const [assignmentName, setAssignmentName] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState(0);
  const [dueDate, setDueDate] = useState("");
  const [availableDate, setAvailableDate] = useState("");

  // Fetch the assignment data based on the aid and cid parameters
  useEffect(() => {
    const foundAssignment = db.assignments.find((assignment: any) => assignment._id === aid && assignment.course === cid);
    if (foundAssignment) {
      setAssignmentName(foundAssignment.title || "");
      setPoints(Number(foundAssignment.points) || 0);
      setDueDate(foundAssignment.due || "");
      setAvailableDate(foundAssignment.availability || "");
    }
  }, [aid, cid]);

  const handleSave = () => {
    // Implement save logic here (e.g., saving to database)
    navigate(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-4 border rounded shadow-sm">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label fw-bold">Assignment Name</label>
        <input
          id="wd-name"
          value={assignmentName}
          onChange={(e) => setAssignmentName(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label fw-bold">Description</label>
        <textarea
          id="wd-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-points" className="form-label fw-bold">Points</label>
        <input
          id="wd-points"
          type="number"
          value={points}
          onChange={(e) => setPoints(Number(e.target.value))}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-due-date" className="form-label fw-bold">Due Date</label>
        <input
          id="wd-due-date"
          type="datetime-local"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-available-date" className="form-label fw-bold">Available From</label>
        <input
          id="wd-available-date"
          type="datetime-local"
          value={availableDate}
          onChange={(e) => setAvailableDate(e.target.value)}
          className="form-control"
        />
      </div>

      {/* Cancel and Save buttons */}
      <div className="mt-4 d-flex justify-content-end">
        <button className="btn btn-secondary me-2" onClick={() => navigate(`/Courses/${cid}/Assignments`)}>Cancel</button>
        <button className="btn btn-danger" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}
