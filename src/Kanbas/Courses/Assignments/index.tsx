import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi"; 
import "../../styles.css";

export default function Assignments() {
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
          <button id="wd-add-assignment-btn" className="btn btn-danger">
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
          <FaPlus className="ms-3" />
          <IoEllipsisVertical className="ms-3" />
        </div>
      </div>

      <ul id="wd-assignments-list" className="list-group rounded-0">
        {[
          {
            title: "A1 - ENV + HTML",
            due: "Due May 13 at 11:59pm",
            availability: "Not available until May 6 at 12:00am",
            points: "100 pts",
            link: "#/Kanbas/Courses/1234/Assignments/123",
          },
          {
            title: "A2 - CSS + BOOTSTRAP",
            due: "Due May 20 at 11:59pm",
            availability: "Not available until May 13 at 12:00am",
            points: "100 pts",
            link: "#",
          },
          {
            title: "A3 - JAVASCRIPT + REACT",
            due: "Due May 27 at 11:59pm",
            availability: "Not available until May 20 at 12:00am",
            points: "100 pts",
            link: "#",
          },
        ].map((assignment, index) => (
          <li
            key={index}
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
              <a
                href={assignment.link}
                className="fw-bold fs-4 text-decoration-none text-dark mb-1"
              >
                {assignment.title}
              </a>
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
