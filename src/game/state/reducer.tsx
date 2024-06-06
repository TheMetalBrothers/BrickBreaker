import {
  MOVE_BALL,
  MOVE_PADDLE,
  BRICK_COLLISION,
  PRESS_START,
  ADD_SCORE,
  DIE,
  GAME_OVER,
  START_GAME
} from "./actions";
import levelOne from "../levels/one";
import createState from "./createState";
import axios from "axios";

interface stateProps {
  isPlaying: boolean;
  score: number;
  lives: number;
  ball: ballProps;
  // bricks: Array<number>
}

interface ballProps {
  isMoving: boolean;
}

interface actionProps {
  payload: payloadProps; //number?
  type: string;
}

interface payloadProps {
  x?: number;
  bricks?: Array<number>
  isMoving?: boolean;
}

const reducer = (state: stateProps, action: actionProps) => {
  
  switch (action.type) {
    case START_GAME:
      return createState(levelOne, {
        isPlaying: true,
      });
      case GAME_OVER:
        // eslint-disable-next-line no-case-declarations
        const username = prompt("YOUR SCORE WAS: "+ state.score+" enter name for leaderboard entry");
        // todo: only post if logged
        axios.post("http://localhost:3001/entry",{
          username: username,
          highscore: state.score,
      }).then(res =>console.log(res) )
      // return state;
      return createState(levelOne, undefined);
      
    case DIE:
      return { ...state, lives: state.lives - 1 };
    case ADD_SCORE:
      return { ...state, score: state.score + action.payload };
    case MOVE_PADDLE:
      return { ...state, paddle: action.payload };
    case MOVE_BALL:
      return { ...state, ball: { ...state.ball, ...action.payload } };
    case PRESS_START:
      return { ...state, ball: { ...state.ball, ...action.payload } };
    case BRICK_COLLISION:
      // eslint-disable-next-line no-case-declarations
      const newBricks = state.bricks.reduce((bricks, brick) => {
        if (action.payload.bricks.find(b => b.id === brick.id)) {
          if (brick.type - 1 <= 0) {
            return [...bricks];
          }
          return [
            ...bricks,
            {
              ...brick,
              type: brick.type - 1
            }
          ];
        }
        return [...bricks, brick];
      }, []);

      return {
        ...state,
        bricks: newBricks
      };
    default:
      throw new Error(action.type);
  }
}

export default reducer;