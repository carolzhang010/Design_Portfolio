import "../styles/Footer.css";
import headshot from "../assets/clz_headshot.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column-a">
          <a href="/Design_Portfolio/about" style={{ textDecoration: "none", color: "inherit" }}>
            <h3>Carol Li Zhang</h3>
            <img src={headshot} alt="Carol Li Zhang Headshot" />
          </a>
      </div>
      <div className="footer-column-b">
        <h3>Contact</h3>
        <ul>
          <li><a href="https://www.linkedin.com/in/carol-li-zhang/">LinkedIn</a></li>
          <li><a href="https://github.com/carolzhang010">GitHub</a></li>
          <li><a href="clz2116@columbia.edu">Email</a></li>
        </ul>
      </div>
      <div className="footer-column-c">
        <h3>Projects</h3>
        <ul>
          <li><a href="/Design_Portfolio/the-humor-project">The Humor Project</a></li>
          <li><a href="/Design_Portfolio/starcode">StarCode</a></li>
          <li><a href="/Design_Portfolio/discin">DISCIN</a></li>
          {/*
          <li><a href="/Design_Portfolio/user-research">User-Focused Research</a></li>
          */}
        </ul>
      </div>
      <div className="footer-column-d">
        <h3>About</h3>
        <a href="/Carol Li Zhang_Resume2025.pdf" download> Resume </a>
      </div>
    </footer>
  );
}

