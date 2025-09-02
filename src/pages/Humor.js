import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../styles/Humor.css";
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

function UIDesign() {
  return (
    <div>
      <h2 className="sectionHeader">
        UI Design
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
        description description description description
        description
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
        src={nyu}
        alt="Corporate Site Homepage"
        style={{ position: "absolute", top: 20, left: 0, right: 20, width: "45%",
        height: "50%", zIndex: 1, transform: "scale(1)"}}
      />
      <img
        src={nyu}
        alt="Webpage Mockup"
        style={{ position: "absolute", top: 20, left: 350, width: "45%",
        height: "50%", zIndex: 1, transform: "scale(1)"  }}
      />
      <img
        src={nyu}
        alt="Webpage Mockup"
        style={{ position: "absolute", top: "60%", width: "101%",
        height: "50%", zIndex: 1, transform: "scale(1)"  }}
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
        description description description description
        description
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
        description
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
        src={nyu}
        alt="Corporate Site Homepage"
        style={{ position: "absolute", top: 20, left: 0, right: 20, width: "45%",
        height: "50%", zIndex: 1, transform: "scale(1)"}}
      />
      <img
        src={nyu}
        alt="Webpage Mockup"
        style={{ position: "absolute", top: 20, left: 350, width: "45%",
        height: "50%", zIndex: 1, transform: "scale(1)"  }}
      />
      <img
        src={nyu}
        alt="Webpage Mockup"
        style={{ position: "absolute", top: "60%", width: "101%",
        height: "50%", zIndex: 1, transform: "scale(1)"  }}
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
        description description description description
        description
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
