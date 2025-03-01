import React, { useState, useRef } from "react";
import "./TicTacto.css";
import circle_icon from "../Assets/o.png";
import cross_icon from "../Assets/x.png";

function TicTacto() {
  const [data, setData] = useState(Array(9).fill(""));
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null);

  const toggle = (e, num) => {
    if (lock || data[num] !== "") {
      return;
    }

    const newData = [...data];
    newData[num] = count % 2 === 0 ? "x" : "o";
    setData(newData);
    setCount(count + 1);

    e.target.innerHTML = `<img src='${newData[num] === "x" ? cross_icon : circle_icon}'>`;

    checkWin(newData);
  };

  const checkWin = (board) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        won(board[a]);
        return;
      }
    }

    if (!board.includes("")) {
      titleRef.current.innerHTML = "It's a Draw!";
      setLock(true);
    }
  };

  const won = (winner) => {
    setLock(true);
    titleRef.current.innerHTML = `Congratulations: <img src='${winner === "x" ? cross_icon : circle_icon}'> Wins`;
  };

  const resetGame = () => {
    setData(Array(9).fill(""));
    setCount(0);
    setLock(false);
    titleRef.current.innerHTML = "Tic Tac Toe Game In <span>React</span>";
    document.querySelectorAll(".boxes").forEach((box) => (box.innerHTML = ""));
  };

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        Tic Tac Toe Game In <span>React</span>
      </h1>
      <div className="board">
        <div className="row1">
          {[0, 1, 2].map((num) => (
            <div key={num} className="boxes" onClick={(e) => toggle(e, num)}></div>
          ))}
        </div>
        <div className="row2">
          {[3, 4, 5].map((num) => (
            <div key={num} className="boxes" onClick={(e) => toggle(e, num)}></div>
          ))}
        </div>
        <div className="row3">
          {[6, 7, 8].map((num) => (
            <div key={num} className="boxes" onClick={(e) => toggle(e, num)}></div>
          ))}
        </div>
      </div>
      <button className="reset" onClick={resetGame}>Reset</button>
    </div>
  );
}

export default TicTacto;