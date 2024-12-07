import React, { useState } from "react";
import AssignmentEditor from "./Editor";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import { useParams } from "react-router-dom";
import "../../styles.css";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const assignments = useSelector((state: RootState) =>
    state.assignments.assignments.filter(
      (assignment) => assignment.course === cid
    )
  );
  const [editingAssignmentId, setEditingAssignmentId] = useState<string | null>(
    null
  );

  const handleReturnToList = () => {
    setEditingAssignmentId(null);
  };

  if (editingAssignmentId) {
    return (
      <AssignmentEditor
        aid={editingAssignmentId}
        cid={cid || ""}
        onClose={handleReturnToList}
      />
    );
  }

  return (
    <div id="wd-assignments" className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="form-control me-2"
          style={{ width: "300px" }}
        />
        <div>
          <button id="wd-add-group-btn" className="btn btn-secondary me-2">
            + Group
          </button>
          <button
            id="wd-add-assignment-btn"
            className="btn btn-danger"
            onClick={() => setEditingAssignmentId("new")}
          >
            + Assignment
          </button>
        </div>
      </div>

      <div className="module-list-group-item p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-3" />
          <strong>ASSIGNMENTS</strong>
        </div>
        <div className="d-flex align-items-center">
          <div
            className="px-3 py-1 border rounded-pill"
            style={{ backgroundColor: "#e9ecef" }}
          >
            40% of Total
          </div>
          <FaPlus
            className="ms-3"
            onClick={() => setEditingAssignmentId("new")}
          />
          <IoEllipsisVertical className="ms-3" />
        </div>
      </div>

      <ul id="wd-assignments-list" className="list-group rounded-0">
        {assignments.map((assignment) => (
          <li
            key={assignment._id}
            className="wd-lesson module-list-group-item p-3 d-flex justify-content-between align-items-center mb-3 border-0"
          >
            <div
              className="d-flex align-items-center"
              style={{ minWidth: "80px" }}
            >
              <BsGripVertical className="me-2 fs-3 text-muted" />
              <HiOutlineDocumentText className="fs-3 text-success" />
            </div>
            <div className="d-flex flex-column flex-grow-1 ms-3">
              <button
                className="fw-bold fs-4 text-decoration-none text-dark mb-1 btn btn-link"
                onClick={() => setEditingAssignmentId(assignment._id)}
              >
                {assignment.title}
              </button>
              <div className="text-muted">
                <span className="text-danger fw-bold">Multiple Modules</span> |{" "}
                {assignment.availability} <br />
                {assignment.due} | {assignment.points}
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="me-3">
                <GreenCheckmark />
              </div>
              <IoEllipsisVertical />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
