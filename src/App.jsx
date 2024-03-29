import { useState } from "react";
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
import Log from "./components/Log.jsx";
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  function handelSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currenctPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currenctPlayer = "O";
      }
      const updateTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex,
          },
          player: currenctPlayer,
        },
        ...prevTurns,
      ];
      return updateTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            handelEdit={() => handelEditClick(true)}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            handelEdit={() => handelEditClick(true)}
          />
        </ol>{" "}
        <GameBoard onSelectSquare={handelSelectSquare} turns={gameTurns} />
      </div>
      <Log />
    </main>
  );
}

export default App;
