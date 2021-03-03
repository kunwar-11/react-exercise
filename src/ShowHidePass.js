import React, { useState } from "react";

const ShowHidePass = () => {
  const [type, setType] = useState(true);

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
      <h2>Show Hide password</h2>
      <input
        placeholder="password"
        style={{ marginBottom: "1rem", padding: "0.5rem 1rem" }}
        type={type ? "password" : "text"}
      />
      <input
        placeholder=" Re -Enter password"
        style={{ marginBottom: "1rem", padding: "0.5rem 1rem" }}
        type={type ? "password" : "text"}
      />
      <button
        style={{ width: "30%", margin: "auto" }}
        onClick={() => setType(!type)}
      >
        {type ? "show password" : "hide password"}
      </button>
    </div>
  );
};

export default ShowHidePass;
