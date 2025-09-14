import "../styles/Discin.css";
import { useEffect, useState } from "react";
import nyu from "../assets/nyu.png";
import alruwais from "../assets/alruwais-mockup.png";
import consumerreports from "../assets/CR.png";

function DescriptionText() {
  return (
    <p className="descriptionText">
        For Prefab Cat Studios’ VR game DISCIN: VR Disc Golf,
        I worked as the lead VR UI/UX designer, focusing on creating a
        seamless, intuitive, and accessible interface for both VR/Disc Golf
        novices and experienced players. The goal was to design an immersive
        experience that made DISCIN easy to learn and play while enhancing overall
        user engagement.
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
  window.open("https://www.discinvr.com/", "_blank");
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

      <p className="descriptionText">
        This project involved designing and prototyping over 15 UI screens,
        conducting user playtests and interviews, and analyzing competitor VR interfaces
        to guide design decisions. Through iterative design and careful attention to menu
        flow, navigation, and accessibility, the final interfaces significantly reduced user
        confusion and improved task completion times, resulting in a smoother, more
        engaging gameplay experience.
      </p>

      <Timeline activeSection={activeSection} scrollTo={scrollTo} />

      <ResearchSection />
      <DesignSection />
      <ImplementationSection />
      <TestingSection />

    </div>
  );
}