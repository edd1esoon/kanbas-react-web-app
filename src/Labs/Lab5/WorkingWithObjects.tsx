import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [module, setModule] = useState({
    id: "1",
    name: "React Basics",
    description:
      "Learn the basics of React, including components, state, and props",
    course: "Web Development",
  });

  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  // Fetch module from server
  const fetchModule = () => {
    fetch(`${REMOTE_SERVER}/lab5/module`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch module");
        return response.json();
      })
      .then((data) => setModule(data))
      .catch((error) => console.error("Error fetching module:", error));
  };

  // Fetch assignment from server
  const fetchAssignment = () => {
    fetch(`${REMOTE_SERVER}/lab5/assignment`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch assignment");
        return response.json();
      })
      .then((data) => setAssignment(data))
      .catch((error) => console.error("Error fetching assignment:", error));
  };

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      {/* Module */}
      {/* Retrieving Module */}
      <h4>Retrieving Module</h4>
      <button onClick={fetchModule} className="btn btn-primary mb-3">
        Get Module
      </button>
      <h4>Editing Module</h4>
      <input
        className="form-control mb-2"
        value={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
        placeholder="Module Name"
      />
      <a
        href={`${REMOTE_SERVER}/lab5/module/name/${module.name}`}
        className="btn btn-primary"
      >
        Update Module Name
      </a>

      <input
        className="form-control my-2"
        value={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
        placeholder="Module Description"
      />
      <a
        href={`${REMOTE_SERVER}/lab5/module/description/${module.description}`}
        className="btn btn-primary"
      >
        Update Module Description
      </a>

      {/* Assignment */}
      {/* Retrieving Assignment */}
      <h4>Retrieving Assignment</h4>
      <button onClick={fetchAssignment} className="btn btn-primary mb-3">
        Get Assignment
      </button>
      <h4>Editing Assignment</h4>
      <input
        className="form-control mb-2"
        type="number"
        value={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: Number(e.target.value) })
        }
        placeholder="Assignment Score"
      />
      <a
        href={`${REMOTE_SERVER}/lab5/assignment/score/${assignment.score}`}
        className="btn btn-primary"
      >
        Update Assignment Score
      </a>

      <div className="form-check my-2">
        <input
          className="form-check-input"
          type="checkbox"
          checked={assignment.completed}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        <label className="form-check-label">Completed</label>
      </div>
      <a
        href={`${REMOTE_SERVER}/lab5/assignment/completed/${assignment.completed}`}
        className="btn btn-primary"
      >
        Update Assignment Completion
      </a>

      {/* Retrieving */}
      <h4>Current Module</h4>
      <pre>{JSON.stringify(module, null, 2)}</pre>

      <h4>Current Assignment</h4>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
    </div>
  );
}
