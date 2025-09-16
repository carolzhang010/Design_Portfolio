import { Link } from "react-router-dom";
import "../styles/Footer.css";
import headshot from "../assets/clz_headshot.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column-a">
        <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
          <h3>Carol Li Zhang</h3>
          <img src={headshot} alt="Carol Li Zhang Headshot" />
        </Link>
      </div>

      <div className="footer-column-b">
        <h3>Contact</h3>
        <ul>
          <li><a href="https://www.linkedin.com/in/carol-li-zhang/" target="_blank" rel="noopener noreferrer">
          LinkedIn
          </a></li>

          <li><a href="https://github.com/carolzhang010" target="_blank" rel="noopener noreferrer">
          GitHub
          </a></li>

          <li><a href="mailto:clz2116@columbia.edu">
          Email
          </a></li>
        </ul>
      </div>

      <div className="footer-column-c">
        <h3>Projects</h3>
        <ul>
          <li><Link to="/the-humor-project">The Humor Project</Link></li>
          <li><Link to="/starcode">StarCode</Link></li>
          <li><Link to="/discin">DISCIN</Link></li>
          {/*
          <li><Link to="/Design_Portfolio/user-research">User-Focused Research</Link></li>
          */}
        </ul>
      </div>

      <div className="footer-column-d">
        <h3>About</h3>
        <a href="/Carol_Li_Zhang_Resume2025.pdf" target="_blank" rel="noopener noreferrer" >
        Resume
        </a>
      </div>
    </footer>
  );
}
