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

export default function Humor() {
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
  </div>
  );
}
