import Player from "./components/Player.jsx";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player
            name="Player 1"
            symbol="X"
            handelEdit={() => handelEditClick(true)}
          />
          <Player
            name="Player 2"
            symbol="O"
            handelEdit={() => handelEditClick(true)}
          />
        </ol>{" "}
        board
      </div>
      log
    </main>
  );
}

export default App;
