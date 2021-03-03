import React, { useState } from "react";

const PasswordMatch = () => {
  const [input, setInput] = useState("");
  const [isMatched, setIsMatched] = useState("");
  let match;
  const matchPassword = (e) => {
    match = e.target.value;
    if (input === match && input.length !== 0) {
      setIsMatched("password matched");
    } else {
      setIsMatched("password did not match");
    }
  };
  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        marginTop: "1rem"
      }}
    >
      <h1>Password Matcher</h1>
      <input
        placeholder="password"
        style={{ marginBottom: "1rem", padding: "0.5rem 1rem" }}
        onChange={(e) => setInput(e.target.value)}
        value={input}
      ></input>
      <input
        placeholder="re-enter password"
        style={{ marginBottom: "1rem", padding: "0.5rem 1rem" }}
        onChange={matchPassword}
      ></input>
      {match ? <h2>{isMatched}</h2> : <h2>{isMatched}</h2>}
    </div>
  );
};

export default PasswordMatch;
