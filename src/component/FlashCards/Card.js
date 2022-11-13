import React, { useState } from "react";

export default function Card({ card }) {
  const [side, setSide] = useState();

  function handleClick() {
    console.log("clicked!");
    setSide(!side);
    console.log(side);
  }
  return (
    <div className={`card ${side ? "side" : ""}`} onClick={handleClick}>
      
      {/* {side ? card.fields.side1 : card.fields.side2} */}
      <div className="front"><img src={card.fields.side1}></img></div>
      <div className="back">{card.fields.side2}</div>
    </div>
  );
}
