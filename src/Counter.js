import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{ padding: "1rem", border: "1px solid black" }}>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button
        style={{ padding: "0.5rem 1rem", margin: "1rem" }}
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
      <button
        style={{ padding: "0.5rem 1rem", margin: "1rem" }}
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
