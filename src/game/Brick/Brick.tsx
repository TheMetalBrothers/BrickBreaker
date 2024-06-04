import "./Brick.css";
import { DIMENSIONS } from "../../game/utils/constants";

interface brickValues { 
  type: string;
  x: number;
  y: number;
}

export default function Brick(props: brickValues) {
  const { type, x, y } = props;
  return (
    <div
      className={`brick brick-${type}`}
      style={{
        width: DIMENSIONS.DEFAULT.BRICK.WIDTH,
        height: DIMENSIONS.DEFAULT.BRICK.HEIGHT,
        top: y,
        left: x
      }}
    />
  );
}
