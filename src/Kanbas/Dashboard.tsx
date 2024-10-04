import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {/* Course 1 */}
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack Software Developer
                  </p>
                  <button className="btn btn-primary"><FaEdit /></button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 2 */}
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/2345/Home"
              >
                <img src="/images/java.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS2345 JavaScript Essentials
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Frontend Web Development
                  </p>
                  <button className="btn btn-primary"><FaEdit /></button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 3 */}
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/3456/Home"
              >
                <img src="/images/python.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS3456 Python for Data Science
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Data Science and Machine Learning
                  </p>
                  <button className="btn btn-primary"><FaEdit /></button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 4 */}
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/4567/Home"
              >
                <img src="/images/java.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS4567 Java Programming
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Object-Oriented Programming
                  </p>
                  <button className="btn btn-primary"><FaEdit /></button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 5 */}
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5678/Home"
              >
                <img src="/images/C++.svg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5678 C++ Algorithms
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Advanced Algorithms and Data Structures
                  </p>
                  <button className="btn btn-primary"><FaEdit /></button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 6 */}
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/6789/Home"
              >
                <img src="/images/nodejs.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS6789 Node.js Backend Development
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Building Scalable Server-side Applications
                  </p>
                  <button className="btn btn-primary"><FaEdit /></button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 7 */}
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/7890/Home"
              >
                <img src="/images/html&css.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS7890 HTML & CSS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Fundamentals of Web Design
                  </p>
                  <button className="btn btn-primary"><FaEdit /></button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
