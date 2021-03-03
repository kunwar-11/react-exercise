import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const LikeAList = () => {
  const [list, setList] = useState([
    {
      id: uuidv4(),
      task: "todo 1",
      liked: false
    },
    {
      id: uuidv4(),
      task: "todo 2",
      liked: false
    },
    {
      id: uuidv4(),
      task: "todo 3",
      liked: false
    }
  ]);
  const [isLiked, setIsLiked] = useState(false);
  const likeAlist = (data) => {
    setIsLiked(!isLiked);
    setList(
      list.map((task) =>
        task.id === data.id ? { ...data, liked: isLiked } : task
      )
    );
  };
  return (
    <div>
      <h2>Like a list</h2>
      {list.map((data) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <h4>{data.task}</h4>
          <h4 onClick={() => likeAlist(data)}>{data.liked ? "❤️ " : "🤍"}</h4>
        </div>
      ))}
    </div>
  );
};

export default LikeAList;
