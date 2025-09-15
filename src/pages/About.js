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

          <div style={{ width: "60%", padding: "20px", textAlign: "justify" }}>
            <p className="about-description">
            I design digital experiences, interfaces, and products that feel more human.
            As a front-end developer and UI/UX designer with a background in computer science,
            interactive media, and business, I enjoy creating intuitive and impactful experiences
            that help people interact, learn, and connect with the world.

            <div style={{ height: 40 }} />

            Combining human-centered design with technical expertise to solve real-world problems is what drives me.

            </p>

            <div style={{ display: "flex", gap: "65px", marginTop: "20px" }}>
              <div className="tooltip">
                <img src={nyushlogo} alt="NYU Shanghai Logo"
                  style={{ width: "120px", height: "120px"}}
                />
                <span className="tooltip-text">
                I earned my bachelor's degree in Interactive Media and Business in 2023 from NYU Shanghai
                </span>
              </div>

              <div className="tooltip">
                <img src={columbialogo} alt="Columbia Logo"
                  style={{ width: "120px", height: "120px", objectFit: "cover"}}
                />
                <span className="tooltip-text">
                In 2023, I joined Columbia University’s CS@CU MS Bridge Program
                in Computer Science, building on my UI/UX foundation and gaining
                coding skills for more technical roles
                </span>
              </div>

              <div className="tooltip">
                <h1 className="textLogo" style={{ width: "120px", height: "120px"}} >
                  <span className="textLogoNumber">3+</span>
                  <br />
                  <span className="textLogoWords">years of design experience</span>
                </h1>
                <span className="tooltip-text">With 3+ years of design experience,
                I bring both technical expertise and a human-centered perspective
                to all of my projects
                </span>
              </div>

              <div className="tooltip">
                <img src={devtoolLogos} alt="Design & Development Tools"
                  style={{ width: "120px", height: "120px"}}
                />
                <span className="tooltip-text">
                My expertise spans both technical and design tools,
                from coding platforms like Github, React, and Next.js, to
                design and prototyping tools such as Figma
                </span>
              </div>
            </div>
          </div>
        </div>

{/*
        <div style={{ marginBottom: "15%" }}>
            <h1 style={{ fontWeight: "normal", fontSize: "48px" }}>
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
*/}
    </div>
  );
}
