import React, { useState } from "react";
import "./App.css"; // Assume we have the grid setup in this CSS file

function App() {
  const [expandedSection, setExpandedSection] = useState(null);

  const handleExpand = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="grid-container">
      <div className="section-1">hi, i'm <br /> ANDRADA GROSEANU</div>
      <div className="section section-2" onClick={() => handleExpand("aboutMe")}>about me</div>
      <div className="section section-3" onClick={() => handleExpand("software")}>Software</div>
      <div className="section section-4" onClick={() => handleExpand("webDev")}>Web Dev</div>
      <div className="section section-5" onClick={() => handleExpand("gameDev")}>Game Dev</div>
      <div className="section section-6" onClick={() => handleExpand("getInTouch")}>Get in touch</div>
      <div className="section section-7" onClick={() => handleExpand("inProgress")}>In progress</div>
      <div className="section section-8" onClick={() => handleExpand("socials")}>Socials</div>
    </div>
  );
}

export default App;
