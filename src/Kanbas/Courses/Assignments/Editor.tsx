import React, { useState } from "react";
import "../../styles.css";

export default function AssignmentEditor() {
  const [assignmentName, setAssignmentName] = useState("A1 - ENV + HTML");
  const [description, setDescription] = useState("Please write comments.");
  const [points, setPoints] = useState(100);
  const [assignedTo, setAssignedTo] = useState(["Everyone"]);
  const [inputValue, setInputValue] = useState("");

  const removeTag = (tag: string) => {
    setAssignedTo(assignedTo.filter((item) => item !== tag));
  };

  const addTag = (event: { key: string; }) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setAssignedTo([...assignedTo, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <div id="wd-assignments-editor" className="p-4 border rounded shadow-sm">
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

      <div className="mb-3 p-3 border rounded" style={{ backgroundColor: "#f8f9fa" }}>
        <p>
          The assignment is <a href="#" className="text-danger fw-bold">available online</a>
        </p>
        <p>
          Submit a link to the landing page of your Web application running on{" "}
          <a href="#" className="text-danger fw-bold">Netlify</a>.
        </p>
        <p>
          The landing page should include the following:
          <ul>
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>
              Link to the <a href="#" className="text-danger fw-bold">Kanbas</a> application
            </li>
            <li>Links to all relevant source code repositories</li>
          </ul>
        </p>
        <p>
          The <a href="#" className="text-danger fw-bold">Kanbas</a> application should include a link to navigate back to the landing page.
        </p>
      </div>

      <div className="mb-3">
        <label htmlFor="wd-points" className="form-label fw-bold">
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          value={points}
          onChange={(e) => setPoints(Number(e.target.value))}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Submission Type</label>
        <div className="p-3 border rounded">
          <select id="wd-submission-type" className="form-select mb-3">
            <option>Online</option>
            <option>On Paper</option>
            <option>No Submission</option>
          </select>

          <label className="form-label fw-bold">Online Entry Options</label>
          <div className="form-check">
            <input
              id="wd-text-entry"
              type="checkbox"
              className="form-check-input"
            />
            <label htmlFor="wd-text-entry" className="form-check-label">
              Text Entry
            </label>
          </div>
          <div className="form-check">
            <input
              id="wd-website-url"
              type="checkbox"
              className="form-check-input"
              defaultChecked
            />
            <label htmlFor="wd-website-url" className="form-check-label">
              Website URL
            </label>
          </div>
          <div className="form-check">
            <input
              id="wd-media-recordings"
              type="checkbox"
              className="form-check-input"
            />
            <label htmlFor="wd-media-recordings" className="form-check-label">
              Media Recordings
            </label>
          </div>
          <div className="form-check">
            <input
              id="wd-student-annotation"
              type="checkbox"
              className="form-check-input"
            />
            <label htmlFor="wd-student-annotation" className="form-check-label">
              Student Annotation
            </label>
          </div>
          <div className="form-check">
            <input
              id="wd-file-upload"
              type="checkbox"
              className="form-check-input"
            />
            <label htmlFor="wd-file-upload" className="form-check-label">
              File Uploads
            </label>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Assign</label>
        <div className="p-3 border rounded">
          <div className="mb-3">
            <label htmlFor="wd-assign-to" className="form-label fw-bold">
              Assign to
            </label>
            <div className="d-flex align-items-center flex-wrap border p-2 rounded">
              {assignedTo.map((tag, index) => (
                <span key={index} className="badge bg-light text-dark me-2">
                  {tag}{" "}
                  <button
                    type="button"
                    className="btn-close ms-1"
                    aria-label="Remove"
                    onClick={() => removeTag(tag)}
                    style={{ fontSize: "0.75em" }}
                  ></button>
                </span>
              ))}
              <input
                id="wd-assign-to"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={addTag}
                className="form-control border-0"
                placeholder="Assign to more people..."
                style={{ boxShadow: "none", width: "auto" }}
              />
            </div>
          </div>

          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="wd-due-date" className="form-label fw-bold">
                Due
              </label>
              <input
                id="wd-due-date"
                type="datetime-local"
                defaultValue="2024-05-13T23:59"
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="wd-available-from" className="form-label fw-bold">
                Available from
              </label>
              <input
                id="wd-available-from"
                type="datetime-local"
                defaultValue="2024-05-06T00:00"
                className="form-control"
              />
            </div>
            <div className="col-md-6 mt-3">
              <label htmlFor="wd-available-until" className="form-label fw-bold">
                Until
              </label>
              <input
                id="wd-available-until"
                type="datetime-local"
                defaultValue="2024-05-20T00:00"
                className="form-control"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 d-flex justify-content-end">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
