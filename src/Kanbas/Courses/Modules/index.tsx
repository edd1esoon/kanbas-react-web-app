import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";

export default function Modules() {
  return (
    <div id="wd-modules">
      <ModulesControls />
      <ul id="wd-modules-list" className="list-group rounded-0">
        {/* Week 1 */}
        <li className="wd-module module-list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              Week 1
            </div>
            <div className="d-flex align-items-center">
              <div className="me-2">
                <GreenCheckmark />
              </div>
              <FaPlus className="me-2" />
              <IoEllipsisVertical />
            </div>
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {[
              "LEARNING OBJECTIVES",
              "Introduction to the course",
              "Learn what is Web Development",
              "LESSON 1",
              "LESSON 2",
            ].map((lesson, index) => (
              <li
                key={index}
                className="wd-lesson module-list-group-item p-3 ps-1 d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  {lesson}
                </div>
                <div className="me-2">
                  <GreenCheckmark />
                </div>
              </li>
            ))}
          </ul>
        </li>
        {/* Week 2 */}
        <li className="wd-module module-list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              Week 2
            </div>
            <div className="d-flex align-items-center">
              <div className="me-2">
                <GreenCheckmark />
              </div>
              <FaPlus className="me-2" />
              <IoEllipsisVertical />
            </div>
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {["LEARNING OBJECTIVES", "LESSON 1", "LESSON 2"].map(
              (lesson, index) => (
                <li
                  key={index}
                  className="wd-lesson module-list-group-item p-3 ps-1 d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson}
                  </div>
                  <GreenCheckmark />
                </li>
              )
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
}
