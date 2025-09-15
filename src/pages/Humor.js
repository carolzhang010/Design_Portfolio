import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../styles/Humor.css";
import image1 from "../assets/Crackd/crackd-productpage.png";
import image2 from "../assets/Crackd/mockup3.png";
import image3 from "../assets/Crackd/mockup2.png";
import image4 from "../assets/Crackd/mockup4.png";
import image5 from "../assets/Crackd/mockup5.png";
import image6 from "../assets/Crackd/crackd-homepage.png";
import image7 from "../assets/Crackd/multihumorintropage.png";
import image8 from "../assets/Crackd/FAQpage.png";

function DescriptionText() {
  return (
    <p className="descriptionText">
      In a project focused on front-end development and interactive web design,
      I contributed to the creations of Crackd.ai, an AI-powered joke-generation
      platform developed by Sparkling Javascript. My work centered on building
      and refining the product's web experience through responsive
      React/Next.js components and a multi-page corporate website
      based on Figma mockups.
    </p>
  );
}

function SampleImages() {
  return (
    <div>
      <div className="sampleImagesRowHumor">
        <img src={image2} alt="" className="sampleImageHumor" />
        <img src={image1} alt="" className="sampleImageHumor" />
      </div>
    </div>
  );
}

function handleClick() {
  window.open("https://sparklingjavascript.com/", "_blank");
}

function UIDesign() {
  return (
    <div>
      <h2 className="sectionHeader">
        UI Design
      </h2>
      <p className="sectionDescription">
        For the Humor Project, I designed and developed a range
        of responsive UI components that shaped the platform's
        interactive experience. Using Figma and Canva, I designed
        different, responsive layouts and explored potential
        functionalities, focusing on how users would navigate
        the site and interact with its "like" functionality and
        joke-generation. These mockups served as blueprints for
        the final build, guiding the development of interfaces that
        felt intuitive and aligned with the project's identity.
      </p>
    </div>
  );
}

function UIDesignSectionImages() {
  return (
  <div>
    <div style={{ position: "relative", width: "100%", height: 300, marginTop: 40, gap: 20}}>

      {/* Overlapping images */}
      <img
        src={image3}
        alt="Cancel Caption Generation Mockup"
        style={{ position: "absolute", top: -60, left: 0, right: 20, width: "45%",
        height: "162%", zIndex: 1, transform: "scale(.7)"}}
      />
      <img
        src={image4}
        alt="Slider Bar Mockup"
        style={{ position: "absolute", top: 20, left: 300, width: "50%",
        height: "50%", zIndex: 1, transform: "scale(1.1)"  }}
      />
      <img
        src={image5}
        alt="Dropdown Menu Mockup"
        style={{ position: "absolute", top: "65%", width: "50%", left: 300,
        height: "50%", zIndex: 1, transform: "scale(1.1)"  }}
      />
    </div>
    </div>
  );
}

function CrossTeamCollaboration() {
  return (
    <div style={{ marginTop: "10%" }}>
      <h2 className="sectionHeader">
        Cross-Team Collaboration
      </h2>
      <p className="sectionDescription"
      style={{ marginTop: 0, marginRight: "auto", marginBottom: 40, marginLeft: "auto", width: "100%" }}>
        Collaboration was a key part of my work in this project.
        I partnered closely with the backend team to ensure that
        API routes connected seamlessly with the front-end, enabling
        real-time joke generation and A/B testing functionality.
        I also worked alongside another UI designer on the corporate website,
        translating her Figma mockups into a fully responsive front-end build.
        In some cases, we collaborated to improve usability and clarity to
        make the final website more user-friendly.
      </p>
    </div>
  );
}

function DesignImplementation() {
  return (
    <div>
      <h2 className="sectionHeader">
        Design Implementation
      </h2>
      <p className="sectionDescription">
        Once UI designs were finalized, I focused on translating
        them into a functional, polished interface. Using React,
        Next.js, HTML, Tailwind, CSS, and JavaScript, I implemented
        the mockups into responsive layouts that worked across different
        devices. Reusable components were built to streamline future
        development, and it ensured consistency in style and functionality
        throughout the site. Accessibility and performance were also
        priorities - page structures were optimized so that the interface
        was both fast and user-friendly. To maintain code quality,
        I worked within a Github-based workflow with regular commits,
        pull requests, and integrated link checks, ensuring the codebase
        remained clean, maintainable, and aligned with team standards.
      </p>
    </div>
  );
}

function DesignImplementationSectionImages() {
  return (
  <div>
    <div style={{ position: "relative", width: "100%", height: 300, marginTop: 40, gap: 20}}>

      {/* Overlapping images */}
      <img
        src={image6}
        alt="Corporate Site Homepage"
        style={{ position: "absolute", top: -10, left: 0, right: 20, width: "45%",
        height: "60%", zIndex: 1, transform: "scale(1)"}}
      />
      <img
        src={image8}
        alt="Webpage Mockup"
        style={{ position: "absolute", top: -10, left: 290, width: "55%",
        height: "60%", zIndex: 1, transform: "scale(1)"  }}
      />
      <img
        src={image7}
        alt="Webpage Mockup"
        style={{ position: "absolute", top: "60%", width: "101%",
        height: "110%", zIndex: 1, transform: "scale(1)"  }}
      />
    </div>
    </div>
  );
}

function FinalThoughts() {
  return (
    <div style={{ marginTop: "10%" }} >
      <h2 className="sectionHeader">
        Final Thoughts
      </h2>
      <p className="sectionDescription"
      style={{ marginTop: 0, marginRight: "auto", marginBottom: 40, marginLeft: "auto", width: "100%" }}>
         Working on the Humor Project was a valuable experience that deepened
         my understanding of front-end development and cohesive design. I
         gained hands-on practice in maintaining the front-end UI to seamlessly
         connect with backend APIs, ensuring that features like real-time joke
         generation and A/B testing functioned correctly. Beyond technical skills,
         I grew in cross-team collaboration, coordinating with backend developers and
         designers to develop a polished product. If I were to approach the project
         again, I would challenge myself to dive deeper into API, prompt engineering,
         and backend work to strengthen my full-stack perspective. Overall, the
         project reinforced how much I enjoy bridging design and development -
         turning creative work into functional, intuitive experiences.
      </p>
    </div>
  );
}


export default function Humor() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
      <h1 className="projectpageName">The Humor Project</h1>
      <p className="projectpageDescriptionHeader">
        Front-End Development & User-Interfaces
      </p>

      <DescriptionText />
      <SampleImages />

    <p className="projectDetails">
      Designed and Implemented with Next.js and React
    </p>

    <div className="buttonContainer">
      <button onClick={handleClick} className="visitSiteButton">
        Visit Website
      </button>
    </div>

    <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginTop: "5%" }}
    data-aos="fade-up" >
        <div style={{ flex: "0 0 48%" }}>
            <UIDesign />
        </div>
        <div style={{ flex: "0 0 52%", marginLeft: "auto" }}>
        <UIDesignSectionImages />
        </div>
    </div>

    <div data-aos="fade-up">
        <CrossTeamCollaboration />
    </div>

    <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginTop: "10%" }}
    data-aos="fade-up" >
        <div style={{ flex: "0 0 48%" }}>
            <DesignImplementation />
        </div>
        <div style={{ flex: "0 0 52%", marginLeft: "auto" }}>
            <DesignImplementationSectionImages />
        </div>
    </div>

    <FinalThoughts/>

  </div>
  );
}
