import React, { useState } from "react";
const AddToCart = () => {
  const [cart, setCart] = useState([]);
  const [isAdded, SetIsAdded] = useState(false);
  const data = [
    {
      id: 1,
      name: "T shirt",
      price: 150,
      qty: 1
    },
    {
      id: 2,
      name: "Jeans",
      price: 250,
      qty: 1
    },
    {
      id: 3,
      name: "Sweater",
      price: 200,
      qty: 1
    }
  ];
  const clickHandler = (data) => {
    setCart([...cart, data]);
    SetIsAdded(false);
  };
  const addingAgain = (data) => {
    setCart([...cart, data]);
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
      <h2>Add To Cart</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "1rem"
        }}
      >
        {data.map((data) => {
          return (
            <div key={data.id} onDoubleClick={() => addingAgain(data)}>
              <h4>{data.name}</h4>
              <p>{`Rs ${data.price}`}</p>
              <button
                style={{ padding: "0.5rem" }}
                onClick={() => clickHandler(data)}
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
      <button
        style={{ display: "block", padding: "0.5rem", margin: "auto" }}
        onClick={() => SetIsAdded(!isAdded)}
      >
        {isAdded ? "Hide Cart" : "Show Cart"}
      </button>
      {isAdded &&
        cart.map((item, index) => (
          <div key={index} style={{ display: "block" }}>
            <h2>{item.name}</h2>
            <p>{`Rs. ${item.price}`}</p>
            <small>qty</small>
          </div>
        ))}
    </div>
  );
};

export default AddToCart;
