import React from 'react';
import "./Card.css";

function Card({ title, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-title">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Card;
