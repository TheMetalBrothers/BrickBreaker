import { useContext } from "react";

import { DIMENSIONS } from "../utils/constants";
import { GameContext } from "../state/context";

export default function HighScores() {
  const {dispatch, actions} = useContext(GameContext);

  return (
    <div
      style={{
        margin: "40px auto",
        width: DIMENSIONS.DEFAULT.WIDTH
      }}
    >
      <button
        style={{
          background: "rebeccapurple",
          padding: "10px 12px 8px",
          borderRadius: "4px",
          color: "#fff"
        }}
        onClick={() => dispatch({
          type: actions.START_GAME,
        })}
      >
        START GAME
      </button>
    </div>
  );
}
