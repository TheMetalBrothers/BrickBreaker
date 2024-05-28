import { DIMENSIONS } from "../utils/constants";

interface Brick {
 id: string;
 type: string;
 x: number;
 y: number;
}

export default function makeLevel(level: string[]) {
  // console.log(level);
  return level.reduce<Brick[]>((bricks, row, y) => {
    console.log(bricks)
    return [
      ...bricks,
      ...row.split("").reduce<Brick[]>((row, brick, x) => {
        if (brick === " ") {
          return [...row];
        }
        return [
          ...row,
          {
            id: `${x},${y}`,
            type: brick,
            x: DIMENSIONS.DEFAULT.BRICK.WIDTH * x,
            y: DIMENSIONS.DEFAULT.BRICK.HEIGHT * y
          }
        ];
      }, [])
    ];
  }, []);
}
