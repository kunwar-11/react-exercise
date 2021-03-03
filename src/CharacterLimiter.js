import React, { useState } from "react";

const CharacterLimiter = () => {
  const [input, setInput] = useState("");
  const [limit, setLimit] = useState(true);
  const characerLimit = 24;
  const inputHandler = (e) => {
    const text = e.target.value;
    if (characerLimit < text.length) {
      setLimit(false);
    } else {
      setLimit(true);
    }
    setInput(text);
  };
  return (
    <div
      style={{ padding: "1rem", border: "1px solid black", marginTop: "1rem" }}
    >
      <h1>Tweet Component</h1>
      <textarea
        style={{ width: "100%", height: "20vh" }}
        value={input}
        onChange={inputHandler}
      ></textarea>
      <h3>Character Left : {characerLimit - input.length}</h3>
      {/* <div>
        {limit ? (
          ""
        ) : (
          <h2>Character Limit exceeded please cut short your tweet</h2>
        )}
      </div> */}
      {!limit && <h2>Character Limit exceeded please cut short your tweet</h2>}
    </div>
  );
};

export default CharacterLimiter;
