import React, { useState, useEffect } from "react";

interface AssignmentEditorProps {
  cid: string;
  aid?: string;
  onClose: () => void;
}

export default function AssignmentEditor({
  cid,
  aid,
  onClose,
}: AssignmentEditorProps) {
  const [assignmentName, setAssignmentName] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState(0);
  const [dueDate, setDueDate] = useState("");
  const [availableDate, setAvailableDate] = useState("");

  useEffect(() => {
    if (aid && aid !== "new") {
      fetch(`/api/assignments/${aid}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Failed to fetch assignment: ${res.status}`);
          }
          return res.json();
        })
        .then((assignment) => {
          setAssignmentName(assignment.title || "");
          setDescription(assignment.description || "");
          setPoints(Number(assignment.points.replace(" pts", "")) || 0);
          setDueDate(assignment.due || ""); 
          setAvailableDate(assignment.availability || ""); 
        })
        .catch((error) => {
          console.error("Error fetching assignment:", error);
          alert("Failed to fetch assignment data. Please try again.");
        });
    } else {
      setAssignmentName("");
      setDescription("");
      setPoints(0);
      setDueDate("");
      setAvailableDate("");
    }
  }, [aid]);

  const handleSave = async () => {
    if (!assignmentName || !dueDate) {
      alert("Assignment name and due date are required.");
      return;
    }

    const newAssignment = {
      title: assignmentName,
      description,
      points: `${points} pts`,
      due: dueDate,
      availability: availableDate, 
      course: cid,
    };

    const url =
      aid && aid !== "new" ? `/api/assignments/${aid}` : `/api/assignments`;
    const method = aid && aid !== "new" ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAssignment),
      });

      if (!response.ok) {
        throw new Error(`Error saving assignment: ${response.status}`);
      }

      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed to save assignment. Please try again.");
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="p-4 border rounded shadow-sm">
      <h3>{aid && aid !== "new" ? "Edit Assignment" : "New Assignment"}</h3>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Assignment Name
        </label>
        <input
          id="name"
          value={assignmentName}
          onChange={(e) => setAssignmentName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="points" className="form-label">
          Points
        </label>
        <input
          id="points"
          type="number"
          value={points}
          onChange={(e) => setPoints(Number(e.target.value))}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dueDate" className="form-label">
          Due Date
        </label>
        <input
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="availableDate" className="form-label">
          Available From
        </label>
        <input
          id="availableDate"
          value={availableDate}
          onChange={(e) => setAvailableDate(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn btn-danger" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
