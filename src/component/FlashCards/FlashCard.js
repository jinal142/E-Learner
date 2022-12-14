import React, { useState } from "react";

export default function Card({ card }) {
  const [side, setSide] = useState();

  function handleClick() {
    console.log("clicked!");
    setSide(!side);
    console.log(side);
  }
  return (
    <div className={`card1 ${side ? "side" : ""}`} onClick={handleClick}>
      <div className="front">
        <h3 style={{backgroundColor:"#b4e5fa", borderRadius:"25px", width:"200px", height:"50px", color:"black", paddingTop:"7px", marginLeft:"90px", marginBottom:"80px"}} >{card.fields.side1[0]}</h3>
        <p style={{backgroundColor:"#061556", borderRadius:"25px", marginBottom:"80px"}}>{card.fields.side1[1]}</p>
        <h4 style={{backgroundColor:"#b4e5fa", borderRadius:"25px", marginTop:"110px", width:"350px", height:"50px", paddingTop:"9px", marginLeft:"10px", color:"black"}}> {card.fields.side1[2]}</h4>
      </div>
       <div className="back"><img src={card.fields.side2}/></div> 
      
      
    </div>
  );
}
