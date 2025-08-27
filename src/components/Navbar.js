import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "2rem 2rem",
      backgroundColor: "#DBE4EE",
      borderBottom: "0.5px solid black"
    }}>
      <div style={{ fontSize: "2.3rem" }}>Carol Li Zhang</div>
      <div>
        <Link to="/projects" style={{ fontSize: "2.3rem", marginLeft: "2rem", textDecoration: "none", color: "black" }}>
          Projects
        </Link>
        <Link to="/about" style={{ fontSize: "2.3rem", marginLeft: "5rem", textDecoration: "none", color: "black" }}>
          About
        </Link>
      </div>
    </nav>
  );
}
