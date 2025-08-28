import "../styles/Discin.css";
import { useEffect, useState } from "react";
import nyu from "../assets/nyu.png";
import alruwais from "../assets/alruwais-mockup.png";
import consumerreports from "../assets/CR.png";

function DescriptionText() {
  return (
    <p className="descriptionText">
      text text text text text text text text text text text text text text text <br />
      text text text text text text text text text text text text text text text <br />
      text text text text text text text text text text text text text text text <br />
      text text text text text text text text text text text text text text text <br />
      text text text text text text text text text text text text text text text <br />
      text text text text text text text text text text text text text text text <br />
    </p>
  );
}

function SampleImages() {
  return (
    <div>
      <div className="sampleImagesRow">
        <img src={consumerreports} alt="Consumer Reports Logo" className="sampleImage" />
        <img src={nyu} alt="New York University Logo" className="sampleImage" />
        <img src={alruwais} alt="Al Ruwais Community Center Proposal Mockup1" className="sampleImage" />
      </div>
    </div>
  );
}

function handleClick() {
  window.open("https://sparklingjavascript.com/", "_blank");
}

function Timeline({ activeSection, scrollTo }) {
  return (
    <nav className="timelineNav" style={{ width: "104%", marginLeft: "-40px"}}>
      <ul>
        <li
          className={`timelineItem ${activeSection === "research" ? "active" : ""}`}
          onClick={() => scrollTo("research")}
        >
          Research
        </li>
        <li
          className={`timelineItem ${activeSection === "design" ? "active" : ""}`}
          onClick={() => scrollTo("design")}
        >
          Design
        </li>
        <li
          className={`timelineItem ${activeSection === "implementation" ? "active" : ""}`}
          onClick={() => scrollTo("implementation")}
        >
          Implementation
        </li>
        <li
          className={`timelineItem ${activeSection === "testing" ? "active" : ""}`}
          onClick={() => scrollTo("testing")}
        >
          Testing
        </li>
      </ul>
    </nav>
  );
}

// Research Section
function ResearchSection() {
  return (
    <section id="research" className="timelineSection">
      text text text text text text text text text text text text text text text text <br />
      text text text text text text text text text text text text text text text text <br />
      text text text text text text text text text text text text text text text text <br />
      text text text text text text text text text text text text text text text text <br />
    </section>
  );
}

// Design Section
function DesignSection() {
  return (
    <section id="design" className="timelineSection">
      text text text text text text text text text text text text text text text text <br />
      text text text text text text text text text text text text text text text text <br />
      text text text text text text text text text text text text text text text text <br />
      text text text text text text text text text text text text text text text text <br />
    </section>
  );
}

// Implementation Section
function ImplementationSection() {
  return (
    <section id="implementation" className="timelineSection">
      text text text text text text text text text text text text text text text text <br />
      text text text text text text text text text text text text text text text text <br />
      text text text text text text text text text text text text text text text text <br />
      text text text text text text text text text text text text text text text text <br />
    </section>
  );
}

// Testing Section
function TestingSection() {
  return (
    <section id="testing" className="timelineSection">
      text text text text text text text text text text text text text text text text <br />
      text text text text text text text text text text text text text text text text <br />
      text text text text text text text text text text text text text text text text <br />
      text text text text text text text text text text text text text text text text <br />
    </section>
  );
}

export default function Starcode() {
  const [activeSection, setActiveSection] = useState("research");

  useEffect(() => {
    const sections = document.querySelectorAll(".timelineSection");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <h1 className="projectpageName">DISCIN</h1>
      <p className="projectpageDescriptionHeader">VR Interfaces & Experiences</p>

      <DescriptionText />
      <SampleImages />

      <div className="buttonContainer">
        <button onClick={handleClick} className="visitSiteButton">
          Visit Website
        </button>
      </div>

      <p className="projectIntro">
        text text text text text text text text text text text text text text text text <br />
        text text text text text text text text text text text text text text text text <br />
        text text text text text text text text text text text text text text text text <br />
        text text text text text text text text text text text text text text text text <br />
      </p>

      <Timeline activeSection={activeSection} scrollTo={scrollTo} />

      <ResearchSection />
      <DesignSection />
      <ImplementationSection />
      <TestingSection />

    </div>
  );
}