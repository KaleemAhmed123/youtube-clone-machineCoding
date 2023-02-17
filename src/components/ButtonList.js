import React from "react";
import Button from "./Button";

const tags = [
  "All",
  "flex",
  "Gaming",
  "Songs",
  "React JS",
  "Photography",
  "Valentine",
  "Pathaan",
  "Fashion",
  "News",
  "Technology",
  "Shaam",
  "Weather",
  "Web Devolopment",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {tags.map((tag, index) => {
        return <Button key={index} name={tag} />;
      })}
    </div>
  );
};

export default ButtonList;
