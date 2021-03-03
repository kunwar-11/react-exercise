import React, { useState } from "react";

const SwitchTabs = () => {
  const [state, setState] = useState([true, false, false]);
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
      <h2>Switch Tabs</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button onClick={() => setState([true, false, false])}>Home</button>
        <button onClick={() => setState([false, true, false])}>About</button>
        <button onClick={() => setState([false, false, true])}>Profile</button>
      </div>
      <Home state={state} />
      <About state={state} />
      <Profile state={state} />
    </div>
  );
};

const Home = ({ state }) => {
  return (
    <div>
      {state[0] && (
        <>
          <h1>Home</h1>
          <p>this is home page</p>
        </>
      )}
    </div>
  );
};
const About = ({ state }) => {
  return (
    <div>
      {state[1] && (
        <>
          <h1>About</h1>
          <p>this is About page</p>
        </>
      )}
    </div>
  );
};
const Profile = ({ state }) => {
  return (
    <div>
      {state[2] && (
        <>
          <h1>Profile</h1>
          <p>this is Profile page</p>
        </>
      )}
    </div>
  );
};

export default SwitchTabs;
