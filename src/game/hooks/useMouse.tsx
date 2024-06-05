import { useEffect } from "react";
import { DIMENSIONS } from "../utils/constants";

interface CB { 
  (x: number): void 
}

export default function useMouse(cb: CB) {
  useEffect(() => {
    function handleMouse(e: { x: number; }) {
      let x;
      const offset = (window.innerWidth - DIMENSIONS.DEFAULT.WIDTH) / 2;
      if (e.x - offset < 0) {
        x = 0;
      } else if (e.x - offset > DIMENSIONS.DEFAULT.HEIGHT / 2) {
        x = DIMENSIONS.DEFAULT.HEIGHT / 2;
      } else {
        x = e.x - offset;
      }
      cb(x);
    }

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [cb]);
}

