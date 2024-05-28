import "./styles.css";

import GameProvider from "./state/context";
import GameContainer from "./GameContainer/GameContainer";

export default function App() {
  return (
    <GameProvider>
      <GameContainer />
    </GameProvider>
  );
}
