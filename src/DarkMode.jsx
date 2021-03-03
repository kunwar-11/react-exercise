import React, { useState } from "react";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div
      style={
        isDark
          ? { backgroundColor: "black", height: "50vh" }
          : { backgroundColor: "white", height: "50vh" }
      }
    >
      <h1 style={isDark ? { color: "white" } : { color: "black" }}>
        I am Heading
      </h1>
      <p style={isDark ? { color: "white" } : { color: "black" }}>
        I am Paragraph
      </p>
      <button
        onClick={() => setIsDark(!isDark)}
        style={
          isDark
            ? {
                color: "white",
                backgroundColor: "black",
                border: "1px solid white"
              }
            : {
                color: "black",
                backgroundColor: "white",
                border: "1px solid black"
              }
        }
      >
        {isDark ? "light mode" : "dark mode"}
      </button>
    </div>
  );
};

export default DarkMode;
