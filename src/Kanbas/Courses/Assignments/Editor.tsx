import React, { useState } from "react";

export default function AssignmentEditor() {

  const [assignmentName, setAssignmentName] = useState("A1 - ENV + HTML");
  const [description, setDescription] = useState(
    " Please write comments. "
  );
  const [points, setPoints] = useState(100);

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input
        id="wd-name"
        value={assignmentName}
        onChange={(e) => setAssignmentName(e.target.value)}
      /><br /><br />
      
      <textarea
        id="wd-description"
        rows={5}
        cols={50}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />

      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
            <input
              id="wd-points"
              type="number"
              value={points}
              onChange={(e) => setPoints(Number(e.target.value))}
            />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option>Percentage</option>
                <option>Complete/Incomplete</option>
                <option>Points</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
                <option>On Paper</option>
                <option>No Submission</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">Online Entry Options</td>
            <td>
              <input id="wd-text-entry" type="checkbox" /> Text Entry<br />
              <input id="wd-website-url" type="checkbox" /> Website URL<br />
              <input id="wd-media-recordings" type="checkbox" /> Media Recordings<br />
              <input id="wd-student-annotation" type="checkbox" /> Student Annotation<br />
              <input id="wd-file-upload" type="checkbox" /> File Uploads
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" value="2024-05-13" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input id="wd-available-from" type="date" value="2024-05-06" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input id="wd-available-until" type="date" value="2024-05-20" />
            </td>
          </tr>
        </tbody>
      </table>

      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
}
