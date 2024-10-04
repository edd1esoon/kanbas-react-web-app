import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const location = useLocation(); 
  return (
    <div id="wd-account-navigation" className="wd course-list-group fs-5 rounded-0">
      <Link
        to="/Kanbas/Account/Signin"
        id="wd-account-signin-link"
        className={`course-list-group-item border border-0 ${
          location.pathname === "/Kanbas/Account/Signin" ? "active" : "text-danger"
        }`}
      >
        Signin
      </Link>
      <Link
        to="/Kanbas/Account/Signup"
        id="wd-account-signup-link"
        className={`course-list-group-item border border-0 ${
          location.pathname === "/Kanbas/Account/Signup" ? "active" : "text-danger"
        }`}
      >
        Signup
      </Link>
      <Link
        to="/Kanbas/Account/Profile"
        id="wd-account-profile-link"
        className={`course-list-group-item border border-0 ${
          location.pathname === "/Kanbas/Account/Profile" ? "active" : "text-danger"
        }`}
      >
        Profile
      </Link>
    </div>
  );
}
