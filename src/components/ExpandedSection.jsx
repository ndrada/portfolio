import React from 'react';

const content = {
  software: "Here's where we showcase the software projects.",
  'web-dev': "Websites developed and managed.",
  'game-dev': "Games you can play (maybe not the best, but fun).",
  'in-progress': "Check out the cool projects I'm working on.",
  'get-in-touch': "Want to connect? Let’s make it happen.",
  socials: "You can stalk me or be my friend. The ball’s in your court.",
};

function ExpandedSection({ section, onClose }) {
  return (
    <div className="expanded-section">
      <button onClick={onClose} className="close-btn">X</button>
      <h1>{section.charAt(0).toUpperCase() + section.slice(1)}</h1>
      <p>{content[section]}</p>
    </div>
  );
}

export default ExpandedSection;
