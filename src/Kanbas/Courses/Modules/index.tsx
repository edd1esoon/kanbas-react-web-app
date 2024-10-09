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
        {/* Module 1 */}
        <li>
          <div>Module 1: Introduction to Web Development</div>
          <ul>
            {/* Lesson 1 */}
            <li>
              <div>Lesson 1: Course Overview</div>
              <ul>
                <li>Introduction to the course</li>
                <li>Understanding the course objectives</li>
              </ul>
            </li>
            {/* Lesson 2 */}
            <li>
              <div>Lesson 2: Basics of HTML</div>
              <ul>
                <li>Introduction to HTML structure</li>
                <li>Creating basic web pages with HTML</li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Module 2 */}
        <li>
          <div>Module 2: Advanced Web Technologies</div>
          <ul>
            {/* Lesson 1 */}
            <li>
              <div>Lesson 1: JavaScript Basics</div>
              <ul>
                <li>Understanding variables and data types</li>
                <li>Writing simple functions in JavaScript</li>
              </ul>
            </li>
            {/* Lesson 2 */}
            <li>
              <div>Lesson 2: Styling with CSS</div>
              <ul>
                <li>Introduction to CSS selectors and properties</li>
                <li>Creating responsive designs</li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Module 3 */}
        <li>
          <div>Module 3: Backend Development</div>
          <ul>
            {/* Lesson 1 */}
            <li>
              <div>Lesson 1: Introduction to Node.js</div>
              <ul>
                <li>Setting up a Node.js server</li>
                <li>Understanding HTTP requests</li>
              </ul>
            </li>
            {/* Lesson 2 */}
            <li>
              <div>Lesson 2: Working with Databases</div>
              <ul>
                <li>Introduction to MongoDB</li>
                <li>Connecting Node.js with MongoDB</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
