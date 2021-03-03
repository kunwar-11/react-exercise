import React, { useState } from "react";

const Toast = () => {
  const [toast, setToast] = useState(true);
  const hideShowToast = () => {
    setToast(false);
  };
  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid black",
        marginTop: "1rem"
      }}
    >
      <button
        style={{ display: `${toast ? "none" : "block"}`, margin: "auto" }}
        onClick={() => setToast(true)}
      >
        Show Toast
      </button>
      <ToastComponent toast={toast} hideShowToast={hideShowToast} />
    </div>
  );
};

const ToastComponent = ({ toast, hideShowToast }) => {
  return (
    <div>
      {toast && (
        <>
          <h2>This is a Toast Component</h2>
          <button onClick={hideShowToast}>Hide Toast</button>
        </>
      )}
    </div>
  );
};
export default Toast;
