import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player
            initialName="Player 1"
            symbol="X"
            handelEdit={() => handelEditClick(true)}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            handelEdit={() => handelEditClick(true)}
          />
        </ol>{" "}
        <GameBoard />
      </div>
      log
    </main>
  );
}

export default App;
