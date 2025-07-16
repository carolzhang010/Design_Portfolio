import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      borderBottom: "1px solid #333",
      backgroundColor: "white"
    }}>
      <div style={{ fontSize: "1.2rem" }}>Carol Li Zhang</div>
      <div>
        <Link to="/projects" style={{ marginLeft: "2rem", textDecoration: "none", color: "black" }}>
          Projects
        </Link>
        <Link to="/about" style={{ marginLeft: "2rem", textDecoration: "none", color: "black" }}>
          About
        </Link>
      </div>
    </nav>
  );
}
