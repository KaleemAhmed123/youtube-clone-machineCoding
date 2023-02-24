import React from "react";

const Comment = ({ data }) => {
  console.log(data);
  const { name, text, replies } = data;

  return (
    <div className="flex flex-col">
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p className="">{text}</p>
        <Comment data={replies[0]} />
      </div>
    </div>
  );
};

export default Comment;
