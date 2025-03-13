import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import SoftwarePage from "./software";
import emailjs from 'emailjs-com';
import sendmeicon from './assets/sendmeicon.png';
import makearezzy from './assets/makearezzy.png';
import rezzymanagement from './assets/rezzymanagement.png'
import scaryjerry from './assets/scaryjerry.png'
import ghostpop from './assets/ghostpop.png'
import breadboard from './assets/breadboard.png'


function App() {
  const [expandedSection, setExpandedSection] = useState(null);

  const handleExpand = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="app">
      <div className={`grid-container ${expandedSection ? `expanded-${expandedSection}` : ""}`}>
        <div className="section-1">
          <div>
          <p>hi, i'm</p>
          <h2>ANDRADA</h2>
          </div>
        </div>
        <div
          className={`section section-2 ${expandedSection === "section2" ? "expanded" : ""}`}
          onClick={() => handleExpand("section2")}>
          <h3>about me</h3>
          {expandedSection === "section2" && (
            <div className="about-me">
              <p>I'm a self-taught software engineer and I enjoy building things for fun (but seriously). <br></br>I started learning programming in 2021 and have been doing it on and off throughout the past few years. Recently this has been my main activity. <br></br> I love learning and experimenting with different concepts, programming languages and softwares. The technologies I work with most are Javascript, React, Node.JS, C# & C++. A full resume is available on my LinkedIn. Ok, I'm done. Now go explore my projects!</p>
          </div>
    
          )}
        </div>
        <div className={`section section-3 ${expandedSection === "section3" ? "disable-hover" : ""}`} onClick={() => handleExpand("section3")}>
          <Card title="Software" />
          <div className="section-details">
            <p>Software, hardware, IoT... what can't she do?
            </p>
          </div>
            <div className="software-projects-section">
              <div className="software-project">
                <img alt="breadboard image" src={breadboard} />
                <h4><Link to="/software">Interactive IoT & Game Integration</Link></h4>
                <p>Integrated 2 microcontrollers (ESP32 & Arduino R4) with Unity to control LEDs on a breadboard based on in-game actions. <br /><br />Built a wifi provisioning system for easy setup & no hard coded credentials.  <br /><br />Designed a custom protocol for real-time game-to-hardware interactions.</p>
                <p id="details">Read more about this project <Link to="/software">here</Link>.</p>
              </div>
            </div>
            <div className={`arrow ${expandedSection === "section3" ? "hidden" : ""}`}>&rarr;</div>
            <div className={`exit ${expandedSection === "section3" ? "visible" : "hidden"}`} onClick={() => handleExpand(null)}>×</div>
          </div>

        <div className={`section section-4 ${expandedSection === "section4" ? "disable-hover" : ""}`} onClick={() => handleExpand("section4")}>
          <Card title="Web Dev" />
          <div className="section-details">
            <p>web apps I’ve built and can (probably) be used.
            </p>
          </div>
          <div className="web-dev-projects-section">
              <div className="web-project">
                <img alt="SendMe project logo" src={sendmeicon} />
                <h4><a href="https://sendmethestuff.netlify.app" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer">SendMe</a></h4>
                <p>Cloud-based file-sharing app, inspired by one of my favorite web application (WeTransfer), built with React, Node.js, & Google Cloud Storage.</p>
              </div>
              <div className="web-project">
                <img alt="Make-a-rezzy logo" src={makearezzy}/>
                <h4><a href="https://make-a-rezzy.netlify.app" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer">Make-A-Rezzy</a></h4>
                <p>Restaurant reservation system built with React and PostgreSQL. Connected to the management system, the app dynamically displays reservation times and dates based on availability. </p>
              </div>
              <div className="web-project">
                <img alt="rezzy management logo" src={rezzymanagement}/>
                <h4><a href="https://manage-rezzy.netlify.app" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer">Rezzy</a></h4>
                <p>Sister web-app for managing reservations and setting rules. Features a search section for quick look-up and sorting. Built using React, Node.js and PostgreSQL</p>
              </div>
            </div>
          <div className={`arrow ${expandedSection === "section4" ? "hidden" : ""}`}>&rarr;</div>
          <div className={`exit ${expandedSection === "section4" ? "visible" : "hidden"}`} onClick={() => handleExpand(null)}>×</div>
        </div>
        <div className={`section section-5 ${expandedSection === "section5" ? "disable-hover" : ""}`} onClick={() => handleExpand("section5")}>
          <Card title="Game Dev" />
          <div className="section-details">
            <p>Game you can actually play! Best games? Probably not. But games I force all my friends to play? Absolutely.
            </p>
          </div>
          <div className="game-dev-projects-section">
              <div className="game-project">
                <img alt="Scarry Jerry game title" src={scaryjerry}/>
                <h4><a href="https://ndrada.itch.io/scary-jerry">Scary Jerry</a></h4>
                <p>Jerry is a zombie with a chainsaw. You have to find the lamp (for obvious reasons) and the gun (for less obvious reasons). Jerry is programmed to kill you on sight. Just saying. Developed in Unity with lots of C#. Good luck!</p>
              </div>
              <div className="game-project">
                <img alt="Ghost pop game title" src={ghostpop}/>
                <h4><a href="https://ndrada.itch.io/ghost-pop">Ghost Pop</a></h4>
                <p>If you like Angry Birds, this is definitely its cousin game (or less accomplished twin). 10 levels. Developed in Unity.</p>
              </div>
            </div>
          <div className={`arrow ${expandedSection === "section5" ? "hidden" : ""}`}>&rarr;</div>
          <div className={`exit ${expandedSection === "section5" ? "visible" : "hidden"}`} onClick={() => handleExpand(null)}>×</div>
        </div>
        <div className={`section section-6 ${expandedSection === "section6" ? "disable-hover" : ""}`} onClick={() => handleExpand("section6")}>
          <Card title="Get in touch" />
          <div className="section-details">
            <p>Email me, call me, send me a letter, a text or a smoke signal. All acceptable forms of correspondence.
            </p>
          </div>
          <div className="contact-form" onClick={(e) => e.stopPropagation()}>
            <form method="post">
              <input type="text" name="Name" placeholder="Name"/>
              <input type="email" name="Email" placeholder="Your email (so I can reply)"/>
              <textarea name="Message" placeholder="Message"/>
              <button type="submit" class="btn-submit">Send</button>
            </form>
          </div>
          <div className={`arrow ${expandedSection === "section6" ? "hidden" : ""}`}>&rarr;</div>
          <div className={`exit ${expandedSection === "section6" ? "visible" : "hidden"}`} onClick={() => handleExpand(null)}>×</div>
        </div>
        <div className={`section section-7 ${expandedSection === "section7" ? "disable-hover" : ""}`} onClick={() => handleExpand("section7")}>
          <Card title="In progress" />
          <div className="section-details">
            <p>Projects that are currently in development but are worth the mention because they’re cool and I’m super excited about them!
            </p>
          </div>
          <div className={`arrow ${expandedSection === "section7" ? "hidden" : ""}`}>&rarr;</div>
          <div className={`exit ${expandedSection === "section7" ? "visible" : "hidden"}`} onClick={() => handleExpand(null)}>×</div>
        </div>
        <div className={`section section-8 ${expandedSection === "section8" ? "disable-hover" : ""}`} onClick={() => handleExpand("section8")}>
          <Card title="Socials" />
          <div className="section-details">
            <p>You can stalk me or be my friend. The ball’s in your court.
            </p>
          </div>
          <div className={`arrow ${expandedSection === "section8" ? "hidden" : ""}`}>&rarr;</div>
          <div className={`exit ${expandedSection === "section8" ? "visible" : "hidden"}`} onClick={() => handleExpand(null)}>×</div>
        </div>
      </div>
    </div>
  );
}

export default App;
