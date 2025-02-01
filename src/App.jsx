import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card"; // Import the updated Card component

function App() {
  const [expandedSection, setExpandedSection] = useState(null);

  const handleExpand = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className={`grid-container ${expandedSection ? `expanded-${expandedSection}` : ""}`}>
      <div className="section-1">
        <div>
        <p>hi, i'm</p>
        <h2>ANDRADA</h2>
        </div>
      </div>
      <div className="section section-2"><h3>about me</h3>
        <div className="about-me">
          <p>I'm a self-taught software engineer and I enjoy building things for fun (but seriously). <br></br>I started learning programming in 2021 and have been doing it on and off throughout the past few years. Recently this has been my main activity. <br></br>I started with web development (JS, React), dabbled with Python (cool guy, but didn't stick), and found it very fun to work with C# and C++. Backend is a new thing for me but Node.js has been great to work with so far! A full resume is available on my LinkedIn. Ok, I'm done. Now go explore my projects!</p>
      </div>
      </div>

      {/* Use the Card component for each section */}
      <div className="section section-3" onClick={() => handleExpand("section3")}>
        <Card title="Software" />
        <div className="section-details">
          <p>projects I've worked on. These are live for public users, used by businesses or just fun stuff I made for myself.
          </p>
        </div>
        <div className="scroll-content">
          <div className="scroll-item">
            <img alt="Project" />
            <h4>SendMe</h4>
            <p>description of project</p>
          </div>
          <div className="scroll-item">
            <img alt="Project" />
            <h4>SendMe</h4>
            <p>description of project</p>
          </div>
          <div className="scroll-item">
            <img alt="Project" />
            <h4>SendMe</h4>
            <p>description of project</p>
          </div>
        </div>
      </div>

      <div className="section section-4" onClick={() => handleExpand("section4")}>
        <Card title="Web Dev" />
        <div className="section-details">
          <p>websites I’ve developed and I am currently managing for local businesses.
          </p>
        </div>
      </div>
      <div className="section section-5" onClick={() => handleExpand("section5")}>
        <Card title="Game Dev" />
        <div className="section-details">
          <p>Game you can actually play! Best games? Probably not. But games I force all my friends to play? Absolutely.
          </p>
        </div>
      </div>
      <div className="section section-6" onClick={() => handleExpand("section6")}>
        <Card title="Get in touch" />
        <div className="section-details">
          <p>Email me, call me, send me a letter, a text or a smoke signal. All acceptable forms of correspondence.
          </p>
        </div>
      </div>
      <div className="section section-7" onClick={() => handleExpand("section7")}>
        <Card title="In progress" />
        <div className="section-details">
          <p>Projects that are currently in development but are worth the mention because they’re cool and I’m super excited about them!
          </p>
        </div>
      </div>
      <div className="section section-8" onClick={() => handleExpand("section8")}>
        <Card title="Socials" />
        <div className="section-details">
          <p>You can stalk me or be my friend. The ball’s in your court.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
