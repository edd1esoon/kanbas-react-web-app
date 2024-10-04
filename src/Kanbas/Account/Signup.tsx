import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function Signup() {
  return (
    <div
      id="wd-signup-screen"
      className="p-4 border rounded shadow-sm"
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <h3 className="mb-4">Sign up</h3>

      <div className="mb-3">
        <input placeholder="username" className="form-control" />
      </div>

      <div className="mb-3">
        <input
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
          Sign up{" "}
        </Link>
      </div>

      <div className="mt-3 text-center">
        <Link
          to="/Kanbas/Account/Signin"
          className="text-decoration-none text-primary"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
