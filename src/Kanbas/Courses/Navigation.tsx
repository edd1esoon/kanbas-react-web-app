import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams(); // Retrieve the current course ID from the URL
  const location = useLocation(); // Get the current location pathname

  // Array of links to dynamically create navigation items
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="wd course-list-group fs-5 rounded-0">
      {links.map((link) => {
        const linkPath = `/Kanbas/Courses/${cid}/${link}`; // Create the dynamic URL path using the course ID and link
        return (
          <Link
            key={link}
            to={linkPath}
            className={`course-list-group-item border border-0 ${
              location.pathname === linkPath ? "active" : "text-danger"
            }`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
