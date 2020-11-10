import React from "react";
import Aircraft from "../assets/Aircraft Shape.png";
import Battleship from "../assets/Battleship Shape.png";
import Carrier from "../assets/Carrier Shape.png";
import Cruiser from "../assets/Cruiser Shape.png";
import Submarine from "../assets/Submarine Shape.png";
import Hit from "../assets/Hit small.png";
import Miss from "../assets/Miss small.png";

const returnImage = (type) => {
  switch (type) {
    case "destroyer":
      return Aircraft;
    case "battleship":
      return Battleship;
    case "carrier":
      return Carrier;
    case "cruiser":
      return Cruiser;
    case "submarine":
      return Submarine;
    default:
      return Aircraft;
  }
};

export const Ship = ({type, length, damage}) => {
  return (
    <div className="ship">
      <img src={returnImage(type)} alt=""/>
      <div className="ship-count">
        {Array.from({length}).map((_, i) => (
          <div className="ship-count-item" key={i}>
            <img src={i + 1 <= damage ? Hit : Miss} alt=""/>
          </div>
        ))}
      </div>
    </div>
  )
};
