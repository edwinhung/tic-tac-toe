import Player from "./components/Player";

function App() {
  return (
    <menu>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
      </div>
    </menu>
  );
}

export default App;
