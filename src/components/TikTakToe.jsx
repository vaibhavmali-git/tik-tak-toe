import { useState } from "react";
import usetictactoe from "../hooks/usetictactoe";

function TikTakToe() {
  const { board, handleClick, calculateWinner, getStatusMessage, resetGame } =
    usetictactoe();
  return (
    <>
      <div className="game">
        <div className="status">
           {getStatusMessage()} 
          <button className="reset-button" onClick={resetGame}>
            Reset Game
          </button>
        </div>
        <div className="board">
          {board.map((b, index) => {
            return (
              <button
                className="cell"
                key={index}
                onClick={() => handleClick(index)}
                disabled={b !== null}
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TikTakToe;
