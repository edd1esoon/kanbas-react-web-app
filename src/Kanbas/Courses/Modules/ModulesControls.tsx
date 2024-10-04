import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { IoEllipsisVertical } from "react-icons/io5";
import "../../styles.css";

export default function ModulesControls() {
  return (
    <div
      id="wd-modules-controls"
      className="d-flex justify-content-between align-items-center wd-module-header"
    >
      <div className="wd-module-title d-flex align-items-center">
      </div>

      <div className="text-nowrap d-flex align-items-center">
        <button id="wd-collapse-all" className="btn btn-lg btn-secondary me-2">
          Collapse All
        </button>

        <button
          id="wd-view-progress"
          className="btn btn-lg btn-secondary me-2"
        >
          View Progress
        </button>

        <div className="dropdown d-inline me-2">
          <button
            id="wd-publish-all-btn"
            className="btn btn-lg btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            Publish All
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                id="wd-publish-all-modules-and-items-btn"
                className="dropdown-item"
                href="#"
              >
                <div className="me-1">
                  <GreenCheckmark />
                </div>
                Publish all modules and items
              </a>
            </li>
            <li>
              <a
                id="wd-publish-modules-only-button"
                className="dropdown-item"
                href="#"
              >
                <div className="me-1">
                  <GreenCheckmark />
                </div>
                Publish modules only
              </a>
            </li>
            <li>
              <a
                id="wd-unpublish-all-modules-and-items"
                className="dropdown-item"
                href="#"
              >
                <MdDoNotDisturbAlt className="me-1" />
                Unpublish all modules and items
              </a>
            </li>
            <li>
              <a
                id="wd-unpublish-modules-only"
                className="dropdown-item"
                href="#"
              >
                <MdDoNotDisturbAlt className="me-1" />
                Unpublish modules only
              </a>
            </li>
          </ul>
        </div>

        <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-2">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Module
        </button>
      </div>
    </div>
  );
}
