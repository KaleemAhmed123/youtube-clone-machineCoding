import React from "react";
import Comment from "./Comment";

const commentData = [
  {
    name: "Kaleem Ahmed",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, facilis.",
    replies: [
      {
        name: "Kaleem Ahmed",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, facilis.",
        replies: [
          {
            name: "Kaleem Ahmed",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, facilis.",
            replies: [
              {
                name: "Kaleem Ahmed",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, facilis.",
                replies: [
                  {
                    name: "Kaleem Ahmed",
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, facilis.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Kaleem Ahmed",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, facilis.",
    replies: [],
  },
  {
    name: "Kaleem Ahmed",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, facilis.",
    replies: [],
  },
  {
    name: "Kaleem Ahmed",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, facilis.",
    replies: [
      {
        name: "Kaleem Ahmed",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, facilis.",
        replies: [
          {
            name: "Kaleem Ahmed",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, facilis.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Kaleem Ahmed",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, facilis.",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <Comment data={commentData[0]} />
    </div>
  );
};

export default CommentsContainer;
