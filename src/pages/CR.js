import "../styles/CR.css";
import { useEffect, useState } from "react";
import nyu from "../assets/nyu.png";
import alruwais from "../assets/alruwais-mockup.png";
import consumerreports from "../assets/CR.png";

function DescriptionText() {
  return (
    <p className="descriptionText">
        In a 4-month long client engagement with Consumer Reports (CR), I led a 6-person UX team in
        applying the human-centered design process to reframe and address a real-world challenge
        statement:
        <span style={{ fontWeight: "bold" }}>
        "How might we help Consumer Reports build a stronger connection between themselves
        and their volunteers?"
        </span>

        <div style={{ height: "40px" }} />

        Over the four months, we conducted 49 interviews and distributed two surveys that
        had a combined total of 276 respondents. Through iterative research, ideation, and prototyping,
        we transformed our findings into actionable solutions, ultimately proposing a new program for CR
        through a hackathon-inspired initiative.
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

function Timeline({ activeSection, scrollTo }) {
  return (
    <nav className="timelineNav" style={{ width: "104%", marginLeft: "-40px"}}>
      <ul>
        <li
          className={`timelineItem ${activeSection === "empathize" ? "active" : ""}`}
          onClick={() => scrollTo("research")}
        >
          Empathize
        </li>
        <li
          className={`timelineItem ${activeSection === "define" ? "active" : ""}`}
          onClick={() => scrollTo("design")}
        >
          Define
        </li>
        <li
          className={`timelineItem ${activeSection === "ideate" ? "active" : ""}`}
          onClick={() => scrollTo("implementation")}
        >
          Ideate
        </li>
        <li
          className={`timelineItem ${activeSection === "testing" ? "active" : ""}`}
          onClick={() => scrollTo("testing")}
        >
          Testing
        </li>
        <li
          className={`timelineItem ${activeSection === "finalprototype" ? "active" : ""}`}
          onClick={() => scrollTo("testing")}
        >
          Final Prototype
        </li>
        <li
          className={`timelineItem ${activeSection === "finalpitch" ? "active" : ""}`}
          onClick={() => scrollTo("testing")}
        >
          Final Pitch
        </li>
      </ul>
    </nav>
  );
}

function EmpathizeSectionImages(){
    return(

        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
            <div>
              <img src={nyu} alt="mockup 1" style={{ width: "100%" }} />
              <p style={{ textAlign: "center" }}> caption caption caption </p>
            </div>
            <div>
              <img src={nyu} alt="mockup 1" style={{ width: "100%" }} />
              <p style={{ textAlign: "center" }}> caption caption caption </p>
            </div>
            <div>
              <img src={nyu} alt="mockup 1" style={{ width: "100%" }} />
              <p style={{ textAlign: "center" }}> caption caption caption </p>
            </div>
            <div>
              <img src={nyu} alt="mockup 1" style={{ width: "100%" }} />
              <p style={{ textAlign: "center" }}> caption caption caption </p>
            </div>
        </div>

    );
}

function EmpathizeSection() {
  return (
    <section id="empathize" className="timelineSection">
      <h2 className="sectionHeader">
        Testing
      </h2>
      <p className="sectionDescription">
          description description description description
          description description description description
          description description description description
          description description description description
          description description description description
          description description description description
          description description description description
          description description description description
          description description description description
          description description description description
      </p>

      <EmpathizeSectionImages />

      <p className="sectionDescription">
          description description description description
          description description description description
          description description description description
          description description description description
          description description description description
          description description description description
          description description description description
          description description description description
          description description description description
          description description description description
      </p>

       <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
         <img src={nyu} alt="mockup 1" style={{ width: "33%" }} />
         <img src={nyu} alt="mockup 2" style={{ width: "33%" }} />
         <img src={nyu} alt="mockup 3" style={{ width: "33%" }} />
       </div>

    </section>
  );
}

function DefineSection(){
  return (
    <section id="define" className="timelineSection">
        <h2 className="sectionHeader">
          Implementation
        </h2>

        {/* Section 1 */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", margin: "5% 0"}}>
          <img
            src={nyu}
            alt="Corporate Site Homepage"
            style={{
              width: "10%",
              height: "auto",
              flex: "0 0 25%",
              objectFit: "cover",
            }}
          />
          <p className="sectionDescription" style={{ flex: "1" }} >
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
          </p>
        </div>

        {/* Section 2 */}
        <div style={{ display: "flex", alignItems: "flex-right", gap: "1rem", margin: "5% 0"}}>
          <p className="sectionDescription" style={{ flex: "1" }} >
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
          </p>

             <img
               src={nyu}
               alt="Corporate Site Homepage"
               style={{
                 width: "10%",
                 height: "auto",
                 flex: "0 0 25%",
                 objectFit: "cover",
               }}
             />
        </div>

        {/* Section 3 */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", margin: "5% 0"}}>
          <img
            src={nyu}
            alt="Corporate Site Homepage"
            style={{
              width: "10%",
              height: "auto",
              flex: "0 0 25%",
              objectFit: "cover",
            }}
          />

          <p className="sectionDescription" style={{ flex: "1" }} >
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
            description description description description
          </p>
        </div>
    </section>
  );
}

function IdeateSection() {
  return (
    <section id="ideate" className="timelineSection">
      <h2 className="sectionHeader">Design</h2>

      <p
        className="sectionDescription"
        style={{
          marginTop: 0,
          marginRight: "auto",
          marginBottom: 40,
          marginLeft: "auto",
          width: "100%",
        }}
      >
        When it comes to design, I usually begin my design process by building the foundation
        of the website (such as layouts) and then work my way up to the smaller details.
        For StarCode, this design phase unfolded across three main iterations.
      </p>

      <div className="Iteration0" style={{ marginTop: 100, fontSize: 24 }}>
        <h3 className="iterationSectionHeader" style={{ marginBottom: 0 }}>
          Iteration 0
          <span style={{ fontStyle: "italic", marginLeft: 50 }}>Rough Sketching</span>
        </h3>

        <p>
          First, I begin by sketching out general layouts on my iPad, creating rough wireframes
          to plan how the main pages and additional pages could be structured. At this stage,
          my main focus is to brainstorm possibilities without worrying about the fine details.
          A lot of inspiration was drawn from reference websites that I had previously analyzed -
          for example, I modeled the structure of the Contact page after IDEO's for clarity and
          ease of navigation. This iteration allowed me to test out new ideas while incorporating
          visuals that I knew already worked.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
        <img src={nyu} alt="mockup 1" style={{ width: "22%" }} />
        <img src={nyu} alt="mockup 2" style={{ width: "22%" }} />
        <img src={nyu} alt="mockup 3" style={{ width: "22%" }} />
        <img src={nyu} alt="mockup 4" style={{ width: "22%" }} />
      </div>

        <p className="Iteration1" style={{ marginTop: 100, fontSize: 24 }}>
            <h3 className="iterationSectionHeader" style={{ marginBottom: 0 }}>
                Iteration 1
                <span style={{ fontStyle: "italic", marginLeft: 50}}>
                 Black & White Wireframes
                </span>
            </h3>
        <br/>
        text

        <div style={{ height: "40px" }} />

        text
        </p>

        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
          <img src={nyu} alt="mockup 1" style={{ width: "33%" }} />
          <img src={nyu} alt="mockup 2" style={{ width: "33%" }} />
          <img src={nyu} alt="mockup 3" style={{ width: "33%" }} />
        </div>
    </section>
  );
}

function TestingSection() {
  const containerStyle = {
    maxWidth: "960px",
    margin: "0 auto",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "32px", // space between sections
  };

  const twoColumnStyle = {
    display: "flex",
    gap: "16px", // space between columns
  };

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    flex: 1, // equal width columns
  };

  const imagePlaceholderStyle = {
    backgroundColor: "#d1d5db", // gray-300 equivalent
    height: "160px",
    width: "100%",
    marginBottom: "8px",
  };

  const textStyle = {
    fontSize: "14px",
  };

  return (
    <section id="testing" className="timelineSection">
      <h2 className="sectionHeader">Testing</h2>
      <div style={containerStyle}>
        {/* Two-column section */}
        <div style={twoColumnStyle}>
          {/* Column 1 */}
          <div style={columnStyle}>
            <div style={imagePlaceholderStyle}></div>
            <p style={textStyle}>
              text text text text text text text text text text text text text text text text text text text text
            </p>
          </div>

          {/* Column 2 */}
          <div style={columnStyle}>
            <div style={imagePlaceholderStyle}></div>
            <p style={textStyle}>
              text text text text text text text text text text text text text text text text text text text text
            </p>
          </div>
        </div>

        {/* Full-width text section */}
        <div>
          <p style={textStyle}>
            text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text
          </p>
        </div>
      </div>
    </section>
  );
}

function FinalPrototypeSection() {
  return (
    <section id="finalprototype" className="timelineSection">
      <h2 className="sectionHeader">Testing</h2>

      {/* First row of images */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", marginBottom: "1rem" }}>
        <img src={nyu} alt="mockup 1" style={{ width: "33%" }} />
        <img src={nyu} alt="mockup 2" style={{ width: "33%" }} />
        <img src={nyu} alt="mockup 3" style={{ width: "33%" }} />
      </div>

      {/* Second row of images */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", marginBottom: "1rem" }}>
        <img src={nyu} alt="mockup 4" style={{ width: "33%" }} />
        <img src={nyu} alt="mockup 5" style={{ width: "33%" }} />
        <img src={nyu} alt="mockup 6" style={{ width: "33%" }} />
      </div>

      {/* Description text */}
      <p className="sectionDescription" style={{ flex: 1, lineHeight: "1.5", marginTop: "1rem" }}>
        description description description description description description description description
        description description description description description description description description
        description description description description description description description description
        description description description description description description description description
        description description description description description description description description
      </p>
    </section>
  );
}

function FinalPitchSection() {
  return (
    <section id="finalpitch" className="timelineSection">
      <h2 className="sectionHeader">Final Pitch</h2>
      <p
        className="sectionDescription"
        style={{ flex: 1, lineHeight: "1.5", marginTop: "1rem" }}
      >
        description description description description description description description description
        description description description description description description description description
        description description description description description description description description
        description description description description description description description description
        description description description description description description description description
      </p>
    </section>
  );
}


export default function CR() {
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
      { threshold: 0.3 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <h1 className="projectpageName">Consumer Reports</h1>
      <p className="projectpageDescriptionHeader">Human-Centered Research & Design</p>

      <DescriptionText />
      <SampleImages />

      <p className="projectDetails" style={{ marginTop: 50 }}>
        Download the Final Report Here
      </p>

      <div className="buttonContainer" style={{ marginTop: -40 }}>
        <button className="visitSiteButton">
          <a href="CR_FinalPresentation" download> Final Report </a>
        </button>
      </div>

      <Timeline activeSection={activeSection} scrollTo={scrollTo} />

      <EmpathizeSection />
      <DefineSection />
      <IdeateSection />
      <TestingSection />
      <FinalPrototypeSection />
      <FinalPitchSection />

    </div>
  );
}