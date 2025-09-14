import "../styles/AlRuwais.css";
import { useEffect, useState } from "react";
import nyu from "../assets/nyu.png";
import alruwais from "../assets/alruwais-mockup.png";
import consumerreports from "../assets/CR.png";

function DescriptionText() {
  return (
    <p className="descriptionText">
        Developed to establish a strong identity for the Al Ruwais Arts Center,
        this project focused on branding and marketing strategies tailored to community
        needs. On-site assessments and interviews were conducted to identify challenges and
        gather insights for the center's development. A final strategic marketing proposal
        identified the problems and competition facing the Al Ruwais Arts Center and outlined
        implementation strategies that included logos and promotional plans.
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

function Problem() {
  return (
    <div>
      <h2 className="sectionHeader">Problem</h2>
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
      <div>
        <div className="sampleImagesRow">
          <img src={consumerreports} alt="Consumer Reports Logo" className="sampleImage" />
          <img src={nyu} alt="New York University Logo" className="sampleImage" />
          <img src={alruwais} alt="Al Ruwais Community Center Proposal Mockup1" className="sampleImage" />
        </div>
      </div>
    </div>
  );
}

function OurSolution() {
  return (
    <div>
      <h2 className="sectionHeader">Our Solution</h2>
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
    </div>
  );
}

function OurVision() {
  return (
    <div>
      <h2 className="sectionHeader">Our Vision</h2>
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
    </div>
  );
}

function FinalDeliverables() {
  return (
    <div>
      <h2 className="sectionHeader">Final Deliverables</h2>
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
      <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
        <img src={nyu} alt="mockup 1" style={{ width: "33%" }} />
        <img src={nyu} alt="mockup 2" style={{ width: "33%" }} />
        <img src={nyu} alt="mockup 3" style={{ width: "33%" }} />
      </div>
    </div>
  );
}

export default function AlRuwais() {
  return (
    <div>
      <h1 className="projectpageName">Al Ruwais</h1>
      <p className="projectpageDescriptionHeader">Branding & Community Engagement</p>

      <DescriptionText />
      <SampleImages />

      <p className="projectDetails" style={{ marginTop: 50 }}>
        Download the Final Report Here
      </p>

      <div className="buttonContainer" style={{ marginTop: -10, textAlign: "center" }}>
        <a href="/AlRuwais_FinalReport.pdf" download className="downloadButton">
          Final Report
        </a>
      </div>

      <Problem />
      <OurSolution />
      <OurVision />
      <FinalDeliverables />

    </div>
  );
}