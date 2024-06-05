import { useEffect } from "react";

interface CB { 
  (x: number): void 
}

export default function useKeyboard(cb: CB) {
  function handleKeyPress(e) { //React.FormEvent<HTMLInputElement>?
    e.preventDefault();
    cb(e.key);
  }
  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  });
}
