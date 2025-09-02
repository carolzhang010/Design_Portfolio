import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../styles/About.css";
import nyushlogo from "../assets/NYUSHLogo.png";
import columbialogo from "../assets/ColumbiaLogo.png";
import devtoolLogos from "../assets/des-dev-tools.png";
import headshot from "../assets/clz_headshot.png";

export default function About() {
  return (
    <div>
        <h1 className="hello">
            Hi, I'm Carol
        </h1>

        <div style={{ display: "flex", height: "100vh" }}>
          <div style={{ width: "40%" }}>
            <img
              className="headshot"
              src={headshot}
              alt="Headshot"
              style={{ width: "75%", height: "75%", objectFit: "cover" }}
            />
          </div>

          <div style={{ width: "60%", padding: "20px" }}>
            <p className="about-description">
            text text text text text text text text text text text text text <br/>
            text text text text text text text text text text text text text <br/>
            text text text text text text text text text text text text text <br/>
            text text text text text text text text text text text text text <br/>
            text text text text text text text text text text text text text <br/>
            text text text text text text text text text text text text text <br/>
            </p>

            <div style={{ display: "flex", gap: "65px", marginTop: "20px" }}>
                <img src={nyushlogo} alt="NYU Shanghai Logo"
                style={{ width: "120px", height: "120px"}}
                />

                <img src={columbialogo} alt="Columbia Logo"
                style={{ width: "120px", height: "120px", objectFit: "cover"}}
                />

                <h1 className="textLogo" style={{ width: "120px", height: "120px"}} >
                <span className="textLogoNumber"> 3+ </span>
                <br />
                <span className="textLogoWords"> years of design experience </span>
                </h1>

                <img src={devtoolLogos} alt="Design & Development Tools"
                style={{ width: "120px", height: "120px"}}
                />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "15%" }}>
            <h1 style={{ fontWeight: "normal", marginTop: "-10%", fontSize: "48px" }}>
            A little more about myself<span style={{ letterSpacing: "4px" }}>...</span>
            </h1>

            <div style={{ display: "flex", height: "25vh" }}>
              <div className="icon-grid">
                <img src={nyushlogo} alt="icon1" />
                <img src={nyushlogo} alt="icon2" />
                <img src={nyushlogo} alt="icon3" />
                <img src={nyushlogo} alt="icon4" />
                <img src={nyushlogo} alt="icon5" />
                <img src={nyushlogo} alt="icon6" />
              </div>


              <div style={{ width: "60%", padding: "50px", marginTop: "-4%" }}>
                <h1 className="trait">
                    Descriptor Header
                </h1>

                <p className="trait-description">
                text text text text text text text text text text text text text <br/>
                text text text text text text text text text text text text text <br/>
                text text text text text text text text text text text text text <br/>
                text text text text text text text text text text text text text <br/>
                </p>
              </div>
            </div>
        </div>

    </div>
  );
}
