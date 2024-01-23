import { useEffect, useRef, useState } from "react";

export function useTypingEffect(textToType, interKeyStrokeDurationInMs) {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const currentPositionRef = useRef(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPosition((value) => value + 1);
      currentPositionRef.current += 1;
      if (currentPositionRef.current > textToType.length) {
        clearInterval(intervalId);
        setShowCursor(false);
      }
    }, interKeyStrokeDurationInMs);

    return () => {
      clearInterval(intervalId);
      currentPositionRef.current = 0;
      setCurrentPosition(0);
      setShowCursor(true);
    };
  }, [interKeyStrokeDurationInMs, textToType]);

  const displayedText = textToType.substring(0, currentPosition);

  return {
    text: displayedText,
    showCursor: showCursor,
  };
}
