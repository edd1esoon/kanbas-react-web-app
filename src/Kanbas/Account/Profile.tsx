import { Link } from "react-router-dom";
import "../styles.css"; 

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="p-4 border rounded shadow-sm">
      <h3 className="mb-4">Profile</h3>
      
      <div className="mb-3">
        <input
          id="wd-username"
          value="alice"
          placeholder="Username"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <input
          id="wd-password"
          value="123"
          placeholder="Password"
          type="password"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <input
          id="wd-firstname"
          value="Alice"
          placeholder="First Name"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <input
          id="wd-lastname"
          value="Wonderland"
          placeholder="Last Name"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <input
          id="wd-dob"
          value="2000-01-01"
          type="date"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <input
          id="wd-email"
          value="alice@wonderland.com"
          type="email"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <select id="wd-role" className="form-select">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>

      <div className="d-flex justify-content-end">
        <Link to="/Kanbas/Account/Signin">
          <button className="btn btn-danger">Sign out</button>
        </Link>
      </div>
    </div>
  );
}
