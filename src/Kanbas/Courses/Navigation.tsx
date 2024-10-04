import { Link, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const location = useLocation();

  return (
    <div id="wd-courses-navigation" className="wd course-list-group fs-5 rounded-0" >
      <Link 
        to="/Kanbas/Courses/1234/Home"
        id="wd-course-home-link"
        className={`course-list-group-item border border-0 ${
          location.pathname === "/Kanbas/Courses/1234/Home" ? "active" : "text-danger"
        }`}
      >
        Home
      </Link>
      <Link 
        to="/Kanbas/Courses/1234/Modules"
        id="wd-course-modules-link"
        className={`course-list-group-item border border-0 ${
          location.pathname === "/Kanbas/Courses/1234/Modules" ? "active" : "text-danger"
        }`}
      >
        Modules
      </Link>
      <Link 
        to="/Kanbas/Courses/1234/Piazza"
        id="wd-course-piazza-link"
        className={`course-list-group-item border border-0 ${
          location.pathname === "/Kanbas/Courses/1234/Piazza" ? "active" : "text-danger"
        }`}
      >
        Piazza
      </Link>
      <Link 
        to="/Kanbas/Courses/1234/Zoom"
        id="wd-course-zoom-link"
        className={`course-list-group-item border border-0 ${
          location.pathname === "/Kanbas/Courses/1234/Zoom" ? "active" : "text-danger"
        }`}
      >
        Zoom
      </Link>
      <Link 
        to="/Kanbas/Courses/1234/Assignments"
        id="wd-course-quizzes-link"
        className={`course-list-group-item border border-0 ${
          location.pathname.startsWith("/Kanbas/Courses/1234/Assignments") ? "active" : "text-danger"
        }`}
      >
        Assignments
      </Link>
      <Link 
        to="/Kanbas/Courses/1234/Quizzes"
        id="wd-course-assignments-link"
        className={`course-list-group-item border border-0 ${
          location.pathname === "/Kanbas/Courses/1234/Quizzes" ? "active" : "text-danger"
        }`}
      >
        Quizzes
      </Link>
      <Link 
        to="/Kanbas/Courses/1234/People"
        id="wd-course-people-link"
        className={`course-list-group-item border border-0 ${
          location.pathname === "/Kanbas/Courses/1234/People" ? "active" : "text-danger"
        }`}
      >
        People
      </Link>
    </div>
  );
}
