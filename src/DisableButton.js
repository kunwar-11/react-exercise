import React, { useState } from "react";

const DisableButton = () => {
  const [input, setInput] = useState("");
  const [isDisable, setIsDisable] = useState(false);
  let pass;
  const checkPassword = (e) => {
    pass = e.target.value;
    if (pass === input) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  };
  const clickHandler = () => {
    console.log(input);
  };
  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid black",
        marginTop: "1rem",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <h2>Disable Button</h2>
      <input
        style={{ padding: "0.5rem 1rem", marginBottom: "1rem" }}
        placeholder="Password"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        style={{ padding: "0.5rem 1rem", marginBottom: "1rem" }}
        placeholder="Re-Enter password"
        onChange={checkPassword}
      />
      <button
        onClick={clickHandler}
        style={{ width: "30%", margin: "auto" }}
        disabled={isDisable}
      >
        Submit
      </button>
    </div>
  );
};

export default DisableButton;
