import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Student CRUD</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add">Add Student</Link>
      </div>
    </nav>
  );
}

export default Navbar;