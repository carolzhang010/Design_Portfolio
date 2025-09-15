import "../styles/Discin.css";
import { useEffect, useState } from "react";
import nyu from "../assets/nyu.png";
import alruwais from "../assets/alruwais-mockup.png";
import consumerreports from "../assets/CR.png";
import discin1 from "../assets/DISCIN/DISCIN_Mockup1.jpg";
import discin2 from "../assets/DISCIN/DISCIN_Mockup2.jpg";
import discin3 from "../assets/DISCIN/DISCIN_Mockup3.jpg";
import discin4 from "../assets/DISCIN/DISCIN_CoursePreview.jpg";
import usermap from "../assets/DISCIN/UXMap.png";
import userpersona1 from "../assets/DISCIN/UserPersona1.png";
import userpersona2 from "../assets/DISCIN/UserPersona2.png";
import sketch1 from "../assets/DISCIN/sketch1.jpg";
import sketch2 from "../assets/DISCIN/sketch2.jpg";
import sketch3 from "../assets/DISCIN/sketch3.jpg";
import mockup1 from "../assets/DISCIN/mockup1.png";
import mockup2 from "../assets/DISCIN/mockup2.png";
import mockup3 from "../assets/DISCIN/mockup3.png";
import mockup4 from "../assets/DISCIN/mockup4.png";
import original1 from "../assets/DISCIN/original-1.png";
import original2 from "../assets/DISCIN/original-2.png";
import original4 from "../assets/DISCIN/original-4.png";
import original5 from "../assets/DISCIN/original-5.png";
import original6 from "../assets/DISCIN/original-6.png";

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
      <div className="sampleImagesRowDiscin">
        <img src={discin4} alt="Course Preview Interface" className="sampleImageDiscin" />
        <img src={discin3} alt="Home Panel" className="sampleImageDiscin" />
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
          className={`timelineItem ${activeSection === "testing" ? "active" : ""}`}
          onClick={() => scrollTo("testing")}
        >
          Implementation & Testing
        </li>
      </ul>
    </nav>
  );
}

// Research Section
function ResearchSection() {
  return (
    <section id="research" className="timelineSection" style={{ marginTop: -20 }}>
      <h2 className="sectionHeader">
        Research
      </h2>
      <div style={{ display: "flex", gap: "2%", alignItems: "flex-start" }}>
        {/* Text on the left */}
        <p className="descriptionText" style={{ flex: "0 0 48%" }}>
          To begin this project, I analyzed the existing UI flow of DISCIN and created a detailed chart
          mapping each step of the interface. This helped flag areas that were unclear or overly complex.
          To ground the research in real player behavior, I also conducted
          playtests with disc golf players, and conducted a comparative market analysis with other VR sports,
          observing how they navigated the game and gathering feedback
          through post-play interviews.
        </p>

        {/* Image on the right */}
        <div style={{ flex: "1" }}>
          <img
            src={usermap}
            alt="Initial User Journey Map"
            style={{
              width: "109%",
              height: "110%",
              objectFit: "cover",
               transform: "scale(1)"
            }}
          />
        </div>
      </div>

      <div style={{ height: 1 }} />

      <p className="descriptionText" style={{ width: "100%" }}>
        After each playtest and interview, I compiled a list of every pain point or moment of user confusion.
        I then organized these findings into seven categories—covering system-related issues, physics
        inconsistencies, and general usability concerns—which I delivered directly to the development team.
        This categorized list only highlighted UI/UX gaps and pinpointed technical and gameplay elements
        that were detracting from the overall experience.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "2%" }}>
        <img
          src={userpersona1}
          alt="User Persona 1"
          style={{
            width: "50%",
            height: "100%",
            objectFit: "cover",
            border: "1px solid black",
          }}
        />
        <img
          src={userpersona2}
          alt="User Persona 2"
          style={{
            width: "50%",
            height: "100%",
            objectFit: "cover",
            border: "1px solid black",
          }}
        />
      </div>
    </section>
  );
}

// Design Section
function DesignSection() {
  return (
    <section id="design" className="timelineSection" style={{ marginTop: -50 }}>
      <h2 className="sectionHeader">
        Design
      </h2>

      <div className="descriptionText" style={{ width: "100%" }}>
        To guide the design phase, I conducted a market analysis of ten comparable games,
        including Disc Frenzy and Wii Sports Frisbee Golf. This helped me identify common
        patterns in game setup flows, along with strengths and weaknesses in their user interfaces.

        <div style={{ height: 40 }} />

        Based on this research, I created a design guide exploring fonts, color palettes, and stylistic
        direction. Then, I collaborated with the developers to finalize the visual direction. With those
        decisions set, I sketched out new UI flows that prioritized player clarity and ease of use.

        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", marginTop: "3rem" }}>
          <img src={sketch1} alt="Interface Rough Sketch 1" style={{ width: "33%", border: "1px solid black" }} />
          <img src={sketch2} alt="Interface Rough Sketch 2" style={{ width: "33%", border: "1px solid black" }} />
          <img src={sketch3} alt="Interface Rough Sketch 3" style={{ width: "33%", border: "1px solid black" }} />
        </div>

        <div style={{ height: 40 }} />

        These sketches were then developed into high-fidelity mockups using Canva, incorporating the
        approved color and font choices to ensure consistency with the game’s brand identity.

        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", marginTop: "3rem" }}>
          <img src={mockup1} alt="Practice Lobby Interface Mockup" style={{ width: "50%", border: "1px solid black" }} />
          <img src={mockup2} alt="Player Screen Mockup" style={{ width: "50%", border: "1px solid black" }} />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", marginTop: "3rem" }}>
          <img src={mockup3} alt="Points Display Mockup" style={{ width: "50%", border: "1px solid black" }} />
          <img src={mockup4} alt="Gameplay Mockup" style={{ width: "50%", border: "1px solid black" }} />
        </div>
      </div>

    </section>
  );
}

// Testing Section
function TestingSection() {
  return (
    <section id="testing" className="timelineSection" style={{ marginTop: -50 }}>
        <h2 className="sectionHeader">
          Implementation & Testing
        </h2>
      <div className="descriptionText" style={{ width: "100%" }}>
        The implementation process was iterative and collaborative, with developers integrating my designs and me
        providing playtest-based feedback. Across three iterations, I playtested the new UI by stepping into the
        role of a novice player, moving carefully through the tutorial and narrating each step to uncover pain points.
        I also recruited two additional testers to evaluate the updated flow. Their sessions confirmed that the
        new UI significantly reduced confusion, streamlined onboarding, and created a smoother overall experience.
      </div>

      <div className="uiComparison1">
        <img src={original1} alt="Original Settings Interface" style={{ width: "33%", border: "1px solid black" }} />
        <img src={sketch1} alt="New Settings Interface" style={{ width: "33%", border: "1px solid black" }} />
      </div>

      <div className="uiComparison2">
        <img src={original6} alt="Original Practice Lobby Interface" style={{ width: "33%", border: "1px solid black" }} />
        <img src={sketch1} alt="New Practice Lobby Interface" style={{ width: "33%", border: "1px solid black" }} />
      </div>

      <div className="uiComparison3">
        <img src={original4} alt="Original Choose Hole Interface" style={{ width: "33%", border: "1px solid black" }} />
        <img src={sketch1} alt="New Choose Hole Interface" style={{ width: "33%", border: "1px solid black" }} />
      </div>

      <div className="uiComparison4">
        <img src={original2} alt="Original Player Stats Interface" style={{ width: "33%", border: "1px solid black" }} />
        <img src={sketch1} alt="New Player Stats Interface" style={{ width: "33%", border: "1px solid black" }} />
      </div>

      <div className="uiComparison5">
        <img src={original5} alt="Original Scoreboard Interface" style={{ width: "33%", border: "1px solid black" }} />
        <img src={sketch1} alt="New Scoreboard Interface" style={{ width: "33%", border: "1px solid black" }} />
      </div>

    </section>
  );
}

export default function Discin() {
    const [activeSection, setActiveSection] = useState("research");

    const scrollTo = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    useEffect(() => {
      const sections = document.querySelectorAll(".timelineSection");

      const observer = new IntersectionObserver(
        (entries) => {
          // Find the entry closest to the top that's visible
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

          if (visible.length > 0) {
            setActiveSection(visible[0].target.id);
          }
        },
        {
          root: null,
          rootMargin: "0px 0px -50% 0px", // triggers when section crosses halfway
          threshold: 0,
        }
      );

      sections.forEach((sec) => observer.observe(sec));
      return () => sections.forEach((sec) => observer.unobserve(sec));
    }, []);

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

      <Timeline activeSection={activeSection} scrollTo={scrollTo} />

      <ResearchSection />
      <DesignSection />
      <TestingSection />

      <div className="finalThoughts">
        <h2 className="sectionHeader">
          Final Thoughts
        </h2>
        <div className="descriptionText" style={{ width: "100%" }}>
            This project gave me valuable experience in running structured user tests and translating player
            feedback into actionable design improvements. It was also my first time working in the VR and video
            game space, which made the process both exciting and eye-opening. I enjoyed learning how user interface
            design principles adapt to immersive environments, and the collaboration with developers taught me a
            lot about balancing creative vision with technical implementation. Overall, the project strengthened
            my skills as a UI/UX designer while introducing me to an entirely new field of design.
        </div>
      </div>

    </div>
  );
}