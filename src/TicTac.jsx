import React, { useState } from "react";

function TicTac() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const renderSquare = (index) => {
    return (
      <button
        className="square"
        onClick={() => handleNumber(index)}
      
      >
        {board[index]}
      </button>
    );
  };

  const handleNumber = (index) => {
   

    const newBoard = [...board];
    newBoard[index] = turn ? "X" : "O";
    setBoard(newBoard);
    setTurn(!turn);

    const winnerCombination = checkWinner(newBoard);
    if (winnerCombination) {
      setWinner(newBoard[winnerCombination[0]]);
    }
  };

  const checkWinner = (newBoard) => {
    const combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < combination.length; i++) {
      const [a, b, c] = combination[i];
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c]) {
        return combination[i];
      }
    }
    return null;
  };
  const handleReset = () => {
    setBoard(Array(9).fill(null))
    setWinner(null)
  }
  return (
    <>
      <h1>TicTac Game</h1>
      <div className="board">
        <div>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button onClick={handleReset}>Reset</button>
      {winner && <div>{winner} is the Winner of the game</div>}
    </>
  );
}

export default TicTac;
