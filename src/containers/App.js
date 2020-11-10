import React, {useState} from "react";
import "../styles/main.scss";
import {Ship} from "../components/Ship";
import {Table} from "../components/Table";

const ships = {
  shipTypes: {
    destroyer: { size: 5, count: 1, damage: 0 },
    battleship: { size: 4, count: 1, damage: 0 },
    cruiser: { size: 3, count: 1, damage: 0 },
    submarine: { size: 3, count: 1, damage: 0 },
    carrier: { size: 2, count: 1, damage: 0 },
  },
  layout: [
    { ship: "destroyer", positions: [[2, 9], [3, 9], [4, 9], [5, 9], [6, 9]] },
    { ship: "battleship", positions: [[5, 2], [5, 3], [5, 4], [5, 5]] },
    { ship: "cruiser", positions: [[8, 1], [8, 2], [8, 3]] },
    { ship: "submarine", positions: [[3, 0], [3, 1], [3, 2]] },
    { ship: "carrier", positions: [[0, 0], [1, 0]] },
  ]
};

const table = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
];

function App() {
  const [shipTypes, setShipTypes] = useState(ships.shipTypes);
  const [tableWeb, setTableWeb] = useState(table);
  
  const onSquareClickHandler = (coors) => {
    const newTable = [...tableWeb];
    const newShips = {...shipTypes};
  
    if (newTable[coors[0]][coors[1]] === 0) {
      newTable[coors[0]][coors[1]] = 2;
  
      ships.layout.forEach(ship => {
        ship.positions.forEach(pos => {
          if (pos[0] === coors[0] && pos[1] === coors[1]) {
            newTable[coors[0]][coors[1]] = 1;
            newShips[ship.ship].damage += 1;
          }
        });
      });
  
      setTableWeb(newTable);
      setShipTypes(newShips);
    }
  };
  
  return (
    <div className="main">
      <div className="main-left">
        <div className="score">
          <div className="score-item first">
            <span>00</span>
            <p>player 1</p>
          </div>
          <div className="score-item second">
            <span>00</span>
            <p>player 2</p>
          </div>
        </div>
        <div className="main-ships">
          {Object.keys(shipTypes).map((key) => {
            return (
              <Ship
                length={shipTypes[key].size}
                damage={shipTypes[key].damage}
                type={key}
                key={key}
              />
            )
          })}
        </div>
      </div>
      <div className="main-right">
        <Table web={tableWeb} onSquareClick={onSquareClickHandler} />
      </div>
    </div>
  );
}

export default App;
