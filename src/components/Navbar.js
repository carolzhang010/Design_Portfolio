import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar/Navbar.css";

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
      <Link to="/" className="homepage-link">
          <div className="navbar-logo">Carol Li Zhang</div>
      </Link>
      <div className="navbar-links">
        {/* Projects Dropdown */}
        <div className="dropdown" ref={dropdownRef}>
          <span className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
            Projects
          </span>

          {isOpen && (
            <div className="dropdown-menu">
              <Link to="/the-humor-project" className="dropdown-item" onClick={() => setIsOpen(false)}>
                The Humor Project
              </Link>
              <Link to="/starcode" className="dropdown-item" onClick={() => setIsOpen(false)}>
                StarCode
              </Link>
              <Link to="/discin" className="dropdown-item" onClick={() => setIsOpen(false)}>
                DISCIN
              </Link>
              <Link to="/consumer-reports" className="dropdown-item" onClick={() => setIsOpen(false)}>
                Consumer Reports
              </Link>
              <Link to="/nyu-titleix" className="dropdown-item" onClick={() => setIsOpen(false)}>
                NYU Title IX
              </Link>
              <Link to="/alruwais" className="dropdown-item" onClick={() => setIsOpen(false)}>
                Al Ruwais
              </Link>
            </div>
          )}
        </div>

        {/* About link */}
        <Link to="/about" className="navbar-link">
          About
        </Link>
      </div>
    </nav>
  );
}