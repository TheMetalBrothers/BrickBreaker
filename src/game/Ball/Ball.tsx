import "./Ball.css";
import { DIMENSIONS } from "../../game/utils/constants";

interface Props {
  pos: Pos
}

interface Pos {
  width: number;
  height: number,
  x: number;
  y: number;
  isMoving: string;
}

// export default function Ball({ pos }: { pos: Pos }) {
export default function Ball(props: Props) {
  const { pos } = props;
  return (
    
    <div
      className="ball"
      style={{
        width: DIMENSIONS.DEFAULT.BALL.WIDTH,
        height: DIMENSIONS.DEFAULT.BALL.HEIGHT,
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transition: pos.isMoving && "top 0.05s ease 0s, left 0.05s ease 0s"
      }}
    />
  );
}

