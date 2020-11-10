import React from "react";
import Hit from "../assets/Hit.png";
import Miss from "../assets/Miss.png";

export const Table = ({onSquareClick, web}) => {
  return (
    <div className="table">
      {web.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="table-row">
            {row.map((status, squareIndex) => {
              const onClickHandler = () => {
                onSquareClick([rowIndex, squareIndex]);
              };

              return <div key={squareIndex} onClick={onClickHandler} className="table-square">
                {status > 0 && <img src={status === 1 ? Hit : Miss} alt=""/>}
              </div>
            })}
          </div>
        )
      })}
    </div>
  )
};
