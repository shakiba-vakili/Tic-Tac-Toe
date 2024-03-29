import { useState } from "react";
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handelSelectSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
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
        <GameBoard
          onSelectSquare={handelSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      log
    </main>
  );
}

export default App;
