import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="p-4 border rounded shadow-sm" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h3 className="mb-4">Sign in</h3>
      
      <div className="mb-3">
        <input
          id="wd-username"
          placeholder="username"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <input
          id="wd-password"
          placeholder="password"
          type="password"
          className="form-control"
        />
      </div>

      <div className="d-flex justify-content-center mt-4">
      <Link
          id="wd-signin-btn"
          to="/Kanbas/Account/Profile"
          className="btn btn-primary w-100"
        >
          Sign in{" "}
        </Link>
      </div>

      <div className="mt-3 text-center">
        <Link to="/Kanbas/Account/Signup" className="text-decoration-none text-primary">
          Sign up
        </Link>
      </div>
    </div>
  );
}
