import "./Paddle.css";
import { DIMENSIONS } from "../utils/constants";

interface PaddleX { 
  paddleX: paddleProps;
}

interface paddleProps {
  left: number;
  width: number;
  height: number;
  top: number;
}

export default function Paddle(props: PaddleX) {
  const { paddleX } = props;
  return (
    <div
      className="paddle"
      style={{
        left: `${paddleX}px`,
        width: DIMENSIONS.DEFAULT.PADDLE.WIDTH,
        height: DIMENSIONS.DEFAULT.PADDLE.HEIGHT,
        top:
          DIMENSIONS.DEFAULT.HEIGHT -
          (DIMENSIONS.DEFAULT.PADDLE.HEIGHT + DIMENSIONS.DEFAULT.BALL.HEIGHT)
      }}
    />
  );
}
