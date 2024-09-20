import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">

        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} alt="React JS" />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">Full Stack Software Developer</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/2345/Home">
            <img src="/images/java.png" width={200} alt="JavaScript" />
            <div>
              <h5>CS2345 JavaScript Essentials</h5>
              <p className="wd-dashboard-course-title">Frontend Web Development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/3456/Home">
            <img src="/images/python.png" width={200} alt="Python" />
            <div>
              <h5>CS3456 Python for Data Science</h5>
              <p className="wd-dashboard-course-title">Data Science and Machine Learning</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/4567/Home">
            <img src="/images/java.png" width={200} alt="Java" />
            <div>
              <h5>CS4567 Java Programming</h5>
              <p className="wd-dashboard-course-title">Object-Oriented Programming</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5678/Home">
            <img src="/images/C++.svg" width={200} alt="C++" />
            <div>
              <h5>CS5678 C++ Algorithms</h5>
              <p className="wd-dashboard-course-title">Advanced Algorithms and Data Structures</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/6789/Home">
            <img src="/images/nodejs.png" width={200} alt="Node.js" />
            <div>
              <h5>CS6789 Node.js Backend Development</h5>
              <p className="wd-dashboard-course-title">Building Scalable Server-side Applications</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/7890/Home">
            <img src="/images/html&css.png" width={200} alt="HTML & CSS" />
            <div>
              <h5>CS7890 HTML & CSS</h5>
              <p className="wd-dashboard-course-title">Fundamentals of Web Design</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
