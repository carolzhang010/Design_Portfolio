import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar/Navbar.css";
import "../styles/navbar/NavbarResponsive.css";

function MobileNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [projectsOpen, setProjectsOpen] = useState(false);

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Hamburger Icon */}
      <div
        className="navbar-hamburger"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer"}}
      >
        <div style={{ width: 25, height: 1, backgroundColor: "black", margin: "5px 0" }} />
        <div style={{ width: 25, height: 1, backgroundColor: "black", margin: "5px 0" }} />
        <div style={{ width: 25, height: 1, backgroundColor: "black", margin: "5px 0" }} />
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        ref={menuRef}
        className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        {/* Projects Header */}
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: "1rem",
            textAlign: "center",
            color: "#3E7CB1"
          }}
          onClick={() => setProjectsOpen(!projectsOpen)}
        >
          Projects
        </div>

        {/* Projects Sublist */}
        {projectsOpen && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <Link to="/the-humor-project" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: "none", color: "black" }}>The Humor Project</Link>
            <Link to="/starcode" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: "none", color: "black" }}>StarCode</Link>
            <Link to="/discin" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: "none", color: "black" }}>DISCIN</Link>
            <Link to="/consumer-reports" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: "none", color: "black" }}>Consumer Reports</Link>
            <Link to="/nyu-titleix" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: "none", color: "black" }}>NYU Title IX</Link>
            <Link to="/alruwais" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: "none", color: "black" }}>Al Ruwais</Link>
          </div>
        )}

        {/* About link */}
        <div style={{ marginBottom: "2rem", marginTop: "2rem", textAlign: "center" }}>
          <Link to="/about" style={{ color: "#3E7CB1", textDecoration: "none", fontSize: "1.5rem", fontWeight: "bold" }} onClick={() => setMobileMenuOpen(false)}>About</Link>
        </div>

        {/* 2x2 Links Flex Layout */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
          {/* First Row */}
          <div style={{ display: "flex", justifyContent: "space-around", gap: "2rem" }}>
            <a href="https://www.linkedin.com/in/carol-li-zhang/" style={{ textDecoration: "none", color: "black" }}>LinkedIn</a>
            <a href="https://github.com/carolzhang010" style={{ textDecoration: "none", color: "black" }}>GitHub</a>
          </div>

          {/* Second Row */}
          <div style={{ display: "flex", justifyContent: "space-around", gap: "2rem" }}>
            <a href="mailto:clz2116@columbia.edu" style={{ textDecoration: "none", color: "black" }}>Email</a>
            <a href="/Carol Li Zhang_Resume2025.pdf" download style={{ textDecoration: "none", color: "black" }}>Resume</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      {/* Logo / Name */}
      <Link to="/" className="homepage-link">
        <div className="navbar-logo">Carol Li Zhang</div>
      </Link>

      {/* Desktop Links */}
      <div className="navbar-links">
        <div className="dropdown" ref={dropdownRef}>
          <span className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
            Projects
          </span>

          {isOpen && (
            <div className="dropdown-menu">
              <Link to="/the-humor-project" className="dropdown-item" onClick={() => setIsOpen(false)}>The Humor Project</Link>
              <Link to="/starcode" className="dropdown-item" onClick={() => setIsOpen(false)}>StarCode</Link>
              <Link to="/discin" className="dropdown-item" onClick={() => setIsOpen(false)}>DISCIN</Link>
              <Link to="/consumer-reports" className="dropdown-item" onClick={() => setIsOpen(false)}>Consumer Reports</Link>
              <Link to="/nyu-titleix" className="dropdown-item" onClick={() => setIsOpen(false)}>NYU Title IX</Link>
              <Link to="/alruwais" className="dropdown-item" onClick={() => setIsOpen(false)}>Al Ruwais</Link>
            </div>
          )}
        </div>

        <Link to="/about" className="navbar-link">About</Link>
      </div>

      {/* Mobile Navbar */}
      <div className="mobile-only">
        <MobileNavbar />
      </div>
    </nav>
  );
}