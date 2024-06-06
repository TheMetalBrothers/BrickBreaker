import { useContext } from "react"
import Paddle from "../Paddle/Paddle";
import Ball from "../Ball/Ball";
import Brick from "../Brick/Brick";
import { GameContext } from "../state/context";
import { DIMENSIONS } from "../utils/constants";
import Score from "../Score";
import Lives from "../Lives";
import HighScores from "../Highscores/HighScores";

export default function GameContainer() {
  const { state } = useContext(GameContext);

  interface brickProp {
    id: string;
  }

  return (
    <>
      {state.isPlaying && <div
        className="container"
        style={{
          width: DIMENSIONS.DEFAULT.WIDTH,
          height: DIMENSIONS.DEFAULT.HEIGHT
        }}
      >
        {state.bricks.map((brick: brickProp) => (
          <Brick type={""} x={0} y={0} key={brick.id} {...brick} />
        ))}
  
        <Paddle paddleX={state.paddle.x} />
        <Ball pos={state.ball} />
        <Score />
        <Lives />
      </div>}
      {!state.isPlaying && <HighScores />}
    </>
  );
}
