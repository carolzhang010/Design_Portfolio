import "../styles/Starcode.css";
import { useEffect, useState } from "react";
import nyu from "../assets/nyu.png";
import alruwais from "../assets/alruwais-mockup.png";
import consumerreports from "../assets/CR.png";

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
    <div>
      <h2 className="sectionHeader">
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
  <div>
    <div style={{ position: "relative", width: "100%", height: 300, gap: 20}}>

      {/* Overlapping images */}
      <img
        src={nyu}
        alt="Corporate Site Homepage"
        style={{ position: "absolute", top: 20, left: 0, right: 20, width: "45%",
        height: "50%", zIndex: 1 }}
      />
      <img
        src={nyu}
        alt="Webpage Mockup"
        style={{ position: "absolute", top: 20, left: 350, width: "45%",
        height: "50%", zIndex: 1 }}
      />
      <img
        src={nyu}
        alt="Webpage Mockup"
        style={{ position: "absolute", top: "60%", width: "101%",
        height: "50%", zIndex: 1  }}
      />
    </div>
    </div>
  );
}

//Testing Section Functions
function SectionText() {
    return (
      <p
        className="sectionDescription"
        style={{
          flex: "1",
        }}
      >
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

/////////////////////////////////////

// Research Section
function ResearchSection() {
  return (
    <section id="research" className="timelineSection" style={{ marginTop: "0" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }} >
        <div style={{ flex: "0 0 50%" }}>
          <ResearchSectionText />
        </div>
        <div style={{ flex: "0 0 48%", marginLeft: "auto" }}>
          <ResearchSectionImages />
        </div>
      </div>

     <p className="sectionQuotes" style={{ fontWeight: "bold" }}>
      "Right now, the website content is rather simplistic [and] doesn't convey who Starcode is"
     </p>
     <p className="sectionQuotes" style={{textAlign: "right", fontWeight: "bold" }}>
      "The currrent website was a temporary creation...[so] it's prone to breaking"
     </p>
     <p className="sectionQuotes" style={{ marginBottom: "10%", fontWeight: "bold" }}>
      "The website lacks visual clarity for the eye...the footer is ugly...[and] the colors are confusing"
     </p>

       <p className="sectionDescription"
       style={{ marginTop: 0, marginRight: "auto", marginBottom: 40, marginLeft: "auto", width: "100%" }}>
        After gathering feedback for the existing site,
        I shifted my focus to understanding how other non-profits
        design their websites. I reviewed a range of websites to see what
        design elements, structures, and features resonated with users -
        and which ones did not. Through these reviews, I identified effective
        designs that I could utilize in creating the first iteration of the
        redesigned StarCode website.
       </p>

       <div style={{ display: "flex", justifyContent: "center", gap: "2%"}}>
         <img
           src={nyu}
           alt="Webpage Mockup"
           style={{ width: "50%", height: "200px", objectFit: "cover" }}
         />
         <img
           src={nyu}
           alt="Webpage Mockup"
           style={{ width: "50%", height: "200px", objectFit: "cover" }}
         />
       </div>
    </section>
  );
}

// Design Section
function DesignSection() {
  return (
    <section id="design" className="timelineSection">
        <h2 className="sectionHeader">
          Design
        </h2>
        <p className="sectionDescription"
        style={{ marginTop: 0, marginRight: "auto", marginBottom: 40, marginLeft: "auto", width: "100%" }}>
            When it comes to design, I usually begin my design process by building the foundation
            of the website (such as layouts) and then work my way up to the smaller details.
            For StarCode, this design phase unfolded across three main iterations.
        </p>

        <p className="Iteration0" style={{ marginTop: 100, fontSize: 24 }}>
            <h3 className="iterationSectionHeader" style={{ marginBottom: 0 }}>
                Iteration 0
                <span style={{ fontStyle: "italic", marginLeft: 50}}>
                 Rough Sketching
                </span>
            </h3>
        <br/>
        First, I begin by sketching out general layouts on my iPad, creating rough wireframes
        to plan how the main pages and additional pages could be structured. At this stage,
        my main focus is to brainstorm possibilities without worrying about the fine details.
        A lot of inspiration was drawn from reference websites that I had previously analyzed -
        for example, I modeled the structure of the Contact page after IDEO's for clarity and
        ease of navigation. This iteration allowed me to test out new ideas while incorporating
        visuals that I knew already worked.
        </p>

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
        Once a few general layouts have been sketched, I move into Figma to
        create more structured designs. For the first digital iteration,
        I focused on black-and-white wireframes to test the structure of my sketches.
        Then, I adjust them based on the organization's content needs and goals - in this
        case, StarCode had a strong desire to make their organization mission clearer.
        To address this, I designed the organization page to immediately highlight the real-world
        problem (gender gap in the tech field) that StarCode aims to solve to clearly communicate
        their mission and goals.

        <div style={{ height: "40px" }} />

        Finally, before moving into final visuals, I conducted user testing with the
        black-and-white layouts to ensure that the UI flow felt intuitive and the content
        hierarchy was clear. Here, I also conducted small user tests by sharing the wireframes
        with the Leadership and Outreach design team, asking them to focus specifically on user
        experience and information clarity. Their feedback helped solidify the flow of the site
        and layout design, and informed adjustments for me to make before moving forward to my
        final iteration.
        </p>

        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
          <img src={nyu} alt="mockup 1" style={{ width: "33%" }} />
          <img src={nyu} alt="mockup 2" style={{ width: "33%" }} />
          <img src={nyu} alt="mockup 3" style={{ width: "33%" }} />
        </div>

        <p className="Iteration1" style={{ marginTop: 100, fontSize: 24 }}>
            <h3 className="iterationSectionHeader" style={{ marginBottom: 0 }}>
                Iteration 2
                <span style={{ fontStyle: "italic", marginLeft: 50}}>
                 Color & Visual Design
                </span>
            </h3>
        <br/>
        Once the layout was solidified, I turned to visual design. To complete the visual
        design, I based the color palette, background elements, and graphic accents on
        the Outreach design team's existing social media and poster designs. This ensured
        brand consistency across platforms. The final design brought together cohesive visuals
        that aligned with both the organization's identity and a clear, smooth UI experience.
        </p>

    </section>
  );
}

// Implementation Section
function ImplementationSection() {
  return (
    <section id="implementation" className="timelineSection">
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

// Testing Section
function TestingSection() {
  return (
    <section id="testing" className="timelineSection">
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
      <h1 className="projectpageName">StarCode</h1>
      <p className="projectpageDescriptionHeader">User-Interfaces & Web Design</p>

      <DescriptionText />
      <SampleImages />

      <p className="projectDetails">
        Designed and Implemented with Figma and Webflow
      </p>

      <div className="buttonContainer">
        <button onClick={handleClick} className="visitSiteButton">
          Visit Website
        </button>
      </div>

      <Timeline activeSection={activeSection} scrollTo={scrollTo} />

      <ResearchSection />
      <DesignSection />

      {/*
      <ImplementationSection />
      <TestingSection />
      */}

      <h1 className="underConstruction" style={{ marginTop: 100, textAlign: "center" }}>
        This project is being built right now - check back soon!
      </h1>

    </div>
  );
}