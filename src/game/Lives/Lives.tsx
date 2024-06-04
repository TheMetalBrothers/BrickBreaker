import { useContext } from "react";
import "./Lives.css";
import { GameContext } from "../../game/state/context";

export default function Lives() {
  const { state } = useContext(GameContext);
  return <div className="lives">Lives: {state.lives}</div>;
}
