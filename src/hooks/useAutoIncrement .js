import { useEffect, useRef, useState } from "react";

export function useAutoIncrement(endValue, speed) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      countRef.current += 1;
      if (countRef.current >= endValue) {
        clearInterval(intervalId);
      }
    }, speed);
    return () => {
      clearInterval(intervalId);
      countRef.current = 0;
      setCount(0);
    };
  }, [endValue, speed]);
  return count;
}
