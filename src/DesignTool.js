import React, { useState } from "react";

const DesignTool = () => {
  const [size, setSize] = useState(100);
  const decreaseSize = () => {
    if (size <= 24) {
      setSize(24);
    } else {
      setSize(size - 8);
    }
    console.log(size);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        border: "1px solid black",
        marginTop: "1rem"
      }}
    >
      <h2>Image resizer</h2>
      <img
        style={{ width: `${size}px`, margin: "auto", marginBottom: "1rem" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Monasterio_Khor_Virap%2C_Armenia%2C_2016-10-01%2C_DD_25.jpg/413px-Monasterio_Khor_Virap%2C_Armenia%2C_2016-10-01%2C_DD_25.jpg"
        alt="img"
      />
      <button
        style={{ width: "30%", margin: "auto", marginBottom: "1rem" }}
        onClick={() => setSize(size + 8)}
      >
        +
      </button>
      <button
        style={{ width: "30%", margin: "auto", marginBottom: "1rem" }}
        onClick={decreaseSize}
      >
        -
      </button>
    </div>
  );
};

export default DesignTool;
