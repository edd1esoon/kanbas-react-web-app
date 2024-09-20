export default function Modules() {
  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button>Collapse All</button>
        <button>View Progress</button>
        <select>
          <option>Publish All</option>
          <option>Publish Selected</option>
          <option>Publish Completed</option>
          <option>Unpublish All</option>
        </select>
        <button>+ Module</button>
      </div>

      <ul>
        <li>
          <div>Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
          <ul>
            <li>
              <span>LEARNING OBJECTIVES</span>
              <ul>
                <li>Introduction to the course</li>
                <li>Learn what is Web Development</li>
              </ul>
            </li>
            <li>
              <span>READING</span>
              <ul>
                <li>Full Stack Developer - Chapter 1 - Introduction</li>
                <li>Full Stack Developer - Chapter 2 - Creating User</li>
              </ul>
            </li>
            <li>
              <span>SLIDES</span>
              <ul>
                <li>Introduction to Web Development</li>
                <li>Creating an HTTP server with Node.js</li>
                <li>Creating a React Application</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <div>Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
        </li>
      </ul>
    </div>
  );
}
