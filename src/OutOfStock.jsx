import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const OutOfStock = () => {
  const items = [
    {
      id: uuidv4(),
      task: "shirt",
      inStock: true
    },
    {
      id: uuidv4(),
      task: "jeans",
      inStock: false
    },
    {
      id: uuidv4(),
      task: "Hoodie",
      inStock: true
    }
  ];
  return (
    <div>
      <h2>Out Of Stock</h2>
      {items.map((item) => (
        <li
          style={
            item.inStock
              ? { color: "black" }
              : { color: "gray", opacity: "0.5" }
          }
        >
          {item.task}
        </li>
      ))}
    </div>
  );
};

export default OutOfStock;
