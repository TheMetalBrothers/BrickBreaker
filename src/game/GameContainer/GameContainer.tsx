import { useContext } from "react";

import Paddle from "../Paddle";
import Ball from "../Ball";
import Brick from "../Brick";

import { GameContext } from "../state/context";
import { DIMENSIONS } from "../utils/constants";
import Score from "../Score";
import Lives from "../Lives";
import HighScores from "../Highscores/HighScores";


export default function GameContainer() {
  const { state } = useContext(GameContext);

  return (
    <>
      {state.isPlaying && <div
        className="container"
        style={{
          width: DIMENSIONS.DEFAULT.WIDTH,
          height: DIMENSIONS.DEFAULT.HEIGHT
        }}
      >
        {state.bricks.map(brick => (
          <Brick key={brick.id} {...brick} />
        ))}
  
        <Paddle paddleX={state.paddle.x} />
        <Ball pos={state.ball} />
        <Score state={""} score={0} />
        <Lives />
      </div>}
      {!state.isPlaying && <HighScores />}
    </>
  );
}
