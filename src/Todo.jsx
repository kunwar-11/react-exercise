import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [work, setWork] = useState([
    {
      id: uuidv4(),
      task: "todo 1",
      isCompleted: false
    },
    {
      id: uuidv4(),
      task: "todo 2",
      isCompleted: false
    },
    {
      id: uuidv4(),
      task: "todo 3",
      isCompleted: false
    }
  ]);
  const [input, setInput] = useState("");
  const submitHandler = () => {
    setWork([...work, { id: uuidv4(), task: input, isCompleted: false }]);
    setInput("");
  };
  const [isDone, setIsDone] = useState(false);
  const taskCompleteHandler = (task) => {
    setIsDone(!isDone);
    setWork(
      work.map((data) =>
        data.id === task.id ? { ...task, isCompleted: isDone } : data
      )
    );
  };
  return (
    <div
      style={{ padding: "1rem", border: "1px solid black", marginTop: "1rem" }}
    >
      <h2>Todo List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      <button onClick={submitHandler}>Add Todo</button>
      {work.map((task) => (
        <li
          key={task.id}
          style={
            task.isCompleted
              ? { textDecoration: "line-through", opacity: "0.5" }
              : { textDecoration: "none", opacity: "1" }
          }
          onClick={() => taskCompleteHandler(task)}
        >
          {task.task}
        </li>
      ))}
    </div>
  );
};

export default Todo;
