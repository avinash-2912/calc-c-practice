import "./Calculator.css";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";

function Calculator() {
  const [number, setNumber] = useState(0);
  const debounceTimer = useRef(null);

  const square = useMemo(() => number * number, [number]);
  const cube = useMemo(() => number * number * number, [number]);

  const handleInput = useCallback((e) => {
    const value = e.target.value;

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      setNumber(value ? Number(value) : 0);
    }, 1000);
  }, []);

  const clearInput = useCallback(() => {
    setNumber(0);
  }, []);

  return (
    <div className="calc">
      <h1 className="heading">Square & Cubes</h1>
      <p>Enter Number</p>
      <input type="number" onChange={handleInput} />
      <div className="result">
        <div>
          Square:
          <p>{square}</p>
        </div>
        <div>
          Cube:
          <p>{cube}</p>
        </div>
      </div>
      <button onClick={clearInput}>Clear</button>
    </div>
  );
}

export default Calculator;
