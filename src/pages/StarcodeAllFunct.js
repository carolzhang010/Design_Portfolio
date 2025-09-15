import "../styles/Starcode.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import nyu from "../assets/nyu.png";
import starcode1 from "../assets/Starcode/mockup-team.png";
import starcode2 from "../assets/Starcode/homepage-half.png";
import starcode3 from "../assets/Starcode/UIFlow.png";
import starcode4 from "../assets/Starcode/homepage-original.png";
import inspo1 from "../assets/Starcode/Inspo1.png";
import inspo2 from "../assets/Starcode/Inspo2.png";
import sketch1 from "../assets/Starcode/HomepageSketch.jpg";
import sketch2 from "../assets/Starcode/VolunteerSketch.jpg";
import sketch3 from "../assets/Starcode/ImpactSketch.jpg";
import sketch4 from "../assets/Starcode/ContactSketch.jpg";
import wireframe1 from "../assets/Starcode/HomepageWireframe.png";
import wireframe2 from "../assets/Starcode/ContactWireframe.png";
import wireframe3 from "../assets/Starcode/MissionWireframe.png";
import final1 from "../assets/Starcode/mockup-home.png";
import final2 from "../assets/Starcode/mockup-mission.png";
import final3 from "../assets/Starcode/mockup-contact.png";


function DescriptionText() {
  return (
    <p className="descriptionText">
     In a project focused on UI, UX, and web design, I created a
     new website for StarCode, a German nonprofit focused on bridging
     the gender gap in tech through teaching young girls how to code.
     This project involved a full redesign of the organization’s website to
     improve usability and communication. After inspecting the existing website,
     25+ areas for improvement were identified - these informed the creation of 15+
     low- and high-fidelity Figma mockups. The redesign focused on an intuitive user
     experience (which included a new navigation bar and footer) and a clearer
     presentation of the non-profit's mission for students, parents, and donors.
    </p>
  );
}

function SampleImages() {
  return (
    <div>
      <div className="sampleImagesRowStarcode">
        <img src={starcode2} alt="Homepage Mockup" className="sampleImageStarcode" />
        <img src={starcode4} alt="Current Homepage" className="sampleImageStarcode" />
      </div>
    </div>
  );
}

function handleClick() {
  window.open("https://www.starcode.de/", "_blank");
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

        {/*
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
        */}
      </ul>
    </nav>
  );
}

//Research Section Functions
function ResearchSectionText() {
  return (
    <div data-aos="fade-up">
      <h2 className="sectionHeader" data-aos="fade-up">
        Research
      </h2>
      <p className="sectionDescription">
        At the start of my work, I always make sure to conduct thorough research and user-interviews
        with the original product. This ensures that I can gather as much feedback as possible and gain
        a clearer understanding of both the strengths and weaknesses of the existing site.
        <br/>
        For Starcode, I began by inspecting the current site, documenting its overall UI/UX flow
        and identifying potential usability issues. Then, I interviewed employees to learn what they
        liked/disliked about the existing site. These conversations (some of the most memorable quotes
        are highlighted below) provided insights that helped me create the initial list of recommended
        changes and new features to explore.
      </p>
    </div>
  );
}

function ResearchSectionImages() {
  return (
  <div data-aos="fade-up">
    <div style={{ position: "relative", width: "100%", height: 300, gap: 20}} data-aos="fade-up">

      {/* Overlapping images */}
      <img
        src={starcode3}
        alt="UI Flow Chart"
        style={{ position: "absolute", top: 100, left: 30, right: 20, width: "100%",
        height: "110%", zIndex: 1, transform: "scale(1.1)", overflow: "hidden"}}
      />
    </div>
    </div>
  );
}

// Research Section
function ResearchSection() {
  return (
    <section
      id="research"
      className="timelineSection"
      style={{ marginTop: "0" }}
      data-aos="fade-up"
    >
      <div
        style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}
        data-aos="fade-up"
      >
        <div style={{ flex: "0 0 50%" }}>
          <ResearchSectionText />
        </div>
        <div style={{ flex: "0 0 48%", marginLeft: "auto" }}>
          <ResearchSectionImages />
        </div>
      </div>

      <p
        className="sectionQuotes"
        style={{ fontWeight: "bold", marginBottom: "10%", fontSize: 30 }}
      >
        "Right now, the website content is rather simplistic [and] doesn't convey who Starcode is"
      </p>
      <p
        className="sectionQuotes"
        style={{
          textAlign: "right",
          fontWeight: "bold",
          marginBottom: "10%",
          fontSize: 30,
        }}
      >
        "The currrent website was a temporary creation...[so] it's prone to breaking"
      </p>
      <p
        className="sectionQuotes"
        style={{ marginBottom: "5%", fontWeight: "bold", fontSize: 30 }}
      >
        "The website lacks visual clarity for the eye...the footer is ugly... the colors are confusing"
      </p>

      <div
        className="sectionDescription"
        style={{
          marginTop: 0,
          marginRight: "auto",
          marginBottom: 40,
          marginLeft: "auto",
          width: "100%",
        }}
      >
        <p>
          After gathering feedback for the existing site, I shifted my focus to
          understanding how other non-profits design their websites. I reviewed a
          range of websites to see what design elements, structures, and features
          resonated with users – and which ones did not. Through these reviews, I
          identified effective designs that I could utilize in creating the first
          iteration of the redesigned StarCode website.
        </p>

        <div style={{ height: 1 }} />

        <p>
          For example, I drew inspiration from the dropdown menu and double-navbar
          design of the CDT (Center for Democracy and Technology) website when
          creating the StarCode dropdowns and navigation. I also took inspiration
          from Codecademy’s homepage, which features a type-out effect that I adapted
          for the StarCode team page to enhance its interactivity and visual appeal.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "2%" }}>
        <img
          src={inspo1}
          alt="Center for Democracy & Technology Homepage"
          style={{
            width: "50%",
            height: "100%",
            objectFit: "cover",
            border: "1px solid black",
          }}
        />
        <img
          src={inspo2}
          alt="CodeAcademy.org Homepage"
          style={{
            width: "50%",
            height: 267,
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
    <section id="design" className="timelineSection" data-aos="fade-up">
      <h2 className="sectionHeader">Design</h2>

      <p
        className="sectionDescription"
        style={{
          marginTop: 0,
          marginRight: "auto",
          marginBottom: 20,
          marginLeft: "auto",
          width: "100%",
        }}
      >
        When it comes to design, I usually begin my design process by building the
        foundation of the website (such as layouts) and then work my way up to the
        smaller details. For StarCode, this design phase unfolded across three main
        iterations.
      </p>

      {/* Iteration 0 */}
      <div className="Iteration0" style={{ marginTop: 80, fontSize: 24 }}>
        <h3 className="iterationSectionHeader" style={{ marginBottom: 0 }}>
          Iteration Zero
          <span style={{ fontStyle: "italic", marginLeft: 50 }}>
            Rough Sketching
          </span>
        </h3>
        <p>
          First, I begin by sketching out general layouts on my iPad, creating rough
          wireframes to plan how the main pages and additional pages could be structured.
          At this stage, my main focus is to brainstorm possibilities without worrying
          about the fine details. A lot of inspiration was drawn from reference websites
          that I had previously analyzed — for example, I modeled the structure of the
          Contact page after IDEO's for clarity and ease of navigation. This iteration
          allowed me to test out new ideas while incorporating visuals that I knew already
          worked.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
        <img src={sketch1} alt="mockup 1" style={{ width: "22%", border: "1px solid black"}} />
        <img src={sketch2} alt="mockup 2" style={{ width: "22%", border: "1px solid black" }} />
        <img src={sketch3} alt="mockup 3" style={{ width: "22%", border: "1px solid black" }} />
        <img src={sketch4} alt="mockup 4" style={{ width: "22%", border: "1px solid black" }} />
      </div>

      {/* Iteration 1 */}
      <div className="Iteration1" style={{ marginTop: 100, fontSize: 24 }}>
        <h3 className="iterationSectionHeader" style={{ marginBottom: 0 }}>
          Iteration 1
          <span style={{ fontStyle: "italic", marginLeft: 50 }}>
            Black & White Wireframes
          </span>
        </h3>
        <p>
          Once a few general layouts have been sketched, I move into Figma to create more
          structured designs. For the first digital iteration, I focused on
          black-and-white wireframes to test the structure of my sketches. Then, I adjust
          them based on the organization's content needs and goals — in this case,
          StarCode had a strong desire to make their organization mission clearer. To
          address this, I designed the organization page to immediately highlight the
          real-world problem (gender gap in the tech field) that StarCode aims to solve to
          clearly communicate their mission and goals.
        </p>

        <div style={{ height: 1 }} />

        <p>
          Finally, before moving into final visuals, I conducted user testing with the
          black-and-white layouts to ensure that the UI flow felt intuitive and the
          content hierarchy was clear. Here, I also conducted small user tests by sharing
          the wireframes with the Leadership and Outreach design team, asking them to
          focus specifically on user experience and information clarity. Their feedback
          helped solidify the flow of the site and layout design, and informed adjustments
          for me to make before moving forward to my final iteration.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
        <img src={wireframe1} alt="HomepageWireframe" style={{ width: "33%", border: "1px solid black" }} />
        <img src={wireframe2} alt="ContactWireframe" style={{ width: "33%", border: "1px solid black" }} />
        <img src={wireframe3} alt="MissionWireframe" style={{ width: "33%", border: "1px solid black" }} />
      </div>

      {/* Iteration 2 */}
      <div className="Iteration2" style={{ marginTop: 100, fontSize: 24 }}>
        <h3 className="iterationSectionHeader" style={{ marginBottom: 0 }}>
          Iteration 2
          <span style={{ fontStyle: "italic", marginLeft: 50 }}>
            Color & Visual Design
          </span>
        </h3>
        <p>
          Once the layout was solidified, I turned to visual design. To complete the
          visual design, I based the color palette, background elements, and graphic
          accents on the Outreach design team's existing social media and poster designs.
          This ensured brand consistency across platforms. The final design brought
          together cohesive visuals that aligned with both the organization's identity and
          a clear, smooth UI experience.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
        <img src={final1} alt="Homepage Final Mockup" style={{ width: "33%", border: "1px solid black" }} />
        <img src={final2} alt="Contact Final Mockup" style={{ width: "33%", border: "1px solid black" }} />
        <img src={final3} alt="Mission Final Mockup" style={{ width: "33%", border: "1px solid black" }} />
      </div>

    </section>
  );
}

// Implementation Section
function ImplementationSection() {
  return (
    <section id="implementation" className="timelineSection" data-aos="fade-up">
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

          < SectionText />
        </div>

        {/* Section 2 */}
        <div style={{ display: "flex", alignItems: "flex-right", gap: "1rem", margin: "5% 0"}}>
            < SectionText />

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

          < SectionText />
        </div>
    </section>
  );
}

//Testing Section Functions
function SectionText() {
    return (
      <p className="sectionDescription" style={{ flex: "1" }} data-aos="fade-up" >
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
    );
}

function TestingSectionImages(){
    return(
        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}
        data-aos="fade-up">
//            <div>
//              <img src={nyu} alt="mockup 1" style={{ width: "100%" }} />
//              <p style={{ textAlign: "center" }}> caption caption caption </p>
//            </div>
//            <div>
//              <img src={nyu} alt="mockup 1" style={{ width: "100%" }} />
//              <p style={{ textAlign: "center" }}> caption caption caption </p>
//            </div>
//            <div>
//              <img src={nyu} alt="mockup 1" style={{ width: "100%" }} />
//              <p style={{ textAlign: "center" }}> caption caption caption </p>
//            </div>
//            <div>
//              <img src={nyu} alt="mockup 1" style={{ width: "100%" }} />
//              <p style={{ textAlign: "center" }}> caption caption caption </p>
//            </div>
        </div>
    );
}

// Testing Section
function TestingSection() {
  return (
    <section id="testing" className="timelineSection" data-aos="fade-up">
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

      <TestingSectionImages />

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

export default function Starcode() {
  const [activeSection, setActiveSection] = useState("research");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        let visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          let mostVisible = visible.reduce((prev, curr) =>
            curr.intersectionRatio > prev.intersectionRatio ? curr : prev
          );
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        root: null,
        threshold: [0.25, 0.5, 0.75],
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div data-aos="fade-up">
      <h1 className="projectpageName">StarCode</h1>
      <p className="projectpageDescriptionHeader">User-Interfaces & Web Design</p>

      <DescriptionText />
      {/* <SampleImages />

      <p className="projectDetails">Designed and Implemented with Figma and Webflow</p>

      <div className="buttonContainer">
        <button onClick={handleClick} className="visitSiteButton">
          Visit Website
        </button>
      </div> */}

      <Timeline activeSection={activeSection} scrollTo={scrollTo} />

      <ResearchSection />
      <DesignSection />

      {/* <ImplementationSection />
      <TestingSection /> */}

      <h1 className="underConstruction" style={{ marginTop: 100, textAlign: "center" }}>
        This project is being built right now - check back soon!
      </h1>
    </div>
  );
}