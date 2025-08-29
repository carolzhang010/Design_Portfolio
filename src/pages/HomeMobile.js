import React from "react";
import { Link } from "react-router-dom";
import { Tagline } from "./Home.js";
import crackd1 from "../assets/crackd-homepage.png";
import crackd2 from "../assets/crackdmultihumor.png";
import crackd3 from "../assets/crackdLogoBlack.png";
import nyu from "../assets/nyu.png";
import alruwais from "../assets/alruwais-mockup.png";
import consumerreports from "../assets/CR.png";
import "../styles/home/HomeResponsive.css";

export function HumorProjectMobileLayout() {
  return (
    <div>
      <Tagline />

      {/* The Humor Project */}
      <Link to="/the-humor-project" className="homepageProjectLink">
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: -150, marginBottom: 50 }}
          data-aos="fade-up"
        >
          {/* Text */}
          <div>
            <h1 style={{ fontSize: "28px", marginLeft: "-5%", color: "#3E7CB1", fontWeight: "bold" }}>
              The Humor Project
            </h1>
            <h2 style={{ fontSize: "18px", marginLeft: "-5%", fontWeight: "normal", marginTop: "-3%"}}>
              Second mini header describing project
            </h2>
          </div>

          {/* Images */}
          <div style={{ position: "relative", gap: "1rem", alignItems: "flex-start", width: "100%" }}>
            <img
              src={crackd1}
              alt="Corporate Site Homepage"
              style={{ position: "absolute", top: -20, width: "50%", left: -20}}
            />

            <img
              src={crackd2}
              alt="Webpage Mockup"
              style={{ position: "absolute", top: -20, width: "50%", left: 150 }}
            />
           <img
              src={crackd3}
              alt="Crackd Logo"
              style={{ position: "absolute", top: 40, width: "50%", left: 150 }}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export function StarcodeProjectMobileLayout() {
  return (
    <div>

      {/* StarCode */}
      <Link to="/starcode" className="homepageProjectLink">
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: -150, marginBottom: 50 }}
          data-aos="fade-up"
        >
          {/* Text */}
          <div>
            <h1 style={{ fontSize: "28px", marginLeft: "-5%", color: "#3E7CB1", fontWeight: "bold" }}>
              StarCode
            </h1>
            <h2 style={{ fontSize: "18px", marginLeft: "-5%", fontWeight: "normal", marginTop: "-3%" }}>
              Second mini header describing project
            </h2>
          </div>

          {/* Images */}
          <div style={{ position: "relative", gap: "1rem", alignItems: "flex-start", width: "100%" }}>
            <img
              src={crackd1}
              alt="Corporate Site Homepage"
              style={{ position: "absolute", top: -20, width: "50%", left: -20}}
            />

            <img
              src={crackd2}
              alt="Webpage Mockup"
              style={{ position: "absolute", top: -20, width: "50%", left: 150 }}
            />
           <img
              src={crackd3}
              alt="Crackd Logo"
              style={{ position: "absolute", top: 40, width: "50%", left: 150 }}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export function DiscinProjectMobileLayout() {
  return (
    <div>

      {/* DISCIN */}
      <Link to="/discin" className="homepageProjectLink">
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: -150, marginBottom: 50 }}
          data-aos="fade-up"
        >
          {/* Text */}
          <div>
            <h1 style={{ fontSize: "28px", marginLeft: "-5%", color: "#3E7CB1", fontWeight: "bold" }}>
              DISCIN
            </h1>
            <h2 style={{ fontSize: "18px", marginLeft: "-5%", fontWeight: "normal", marginTop: "-3%" }}>
              Second mini header describing project
            </h2>
          </div>

          {/* Images */}
          <div style={{ position: "relative", gap: "1rem", alignItems: "flex-start", width: "100%" }}>
            <img
              src={crackd1}
              alt="Corporate Site Homepage"
              style={{ position: "absolute", top: -20, width: "50%", left: -20}}
            />

            <img
              src={crackd2}
              alt="Webpage Mockup"
              style={{ position: "absolute", top: -20, width: "50%", left: 150 }}
            />
           <img
              src={crackd3}
              alt="Crackd Logo"
              style={{ position: "absolute", top: 40, width: "50%", left: 150 }}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export function UXResearchProjectsMobile() {
  return (
    <div>
      <h1
        className="researchHeaderMobile"
        style={{ marginTop: 0, textAlign: "right",
        fontSize: "20px", color: "#3E7CB1", marginRight: "-5%" }}
      >
        User Focused Research and Design
      </h1>

      <div className="flex-row-mobile">
        <a href="/consumer-reports">
          <img src={consumerreports} alt="Consumer Reports Logo" className="flex-image-mobile" />
        </a>

        <a href="/nyu-titleix">
          <img src={nyu} alt="New York University Logo" className="flex-image-mobile" />
        </a>
        <a href="/alruwais">
          <img src={alruwais} alt="Al Ruwais Community Center Proposal Mockup1" className="flex-image-mobile" />
        </a>
      </div>
    </div>
  );
}