import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  let titleCut = title.slice(0, 75);
  if (titleCut.length === 75) titleCut += "....";
  return (
    <div className=" m-2 w-64 h-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumnail" />
      <ul className="px-2">
        <li className="font-bold py-2 text">{titleCut}</li>
        <li>{channelTitle}</li>
        <li>{Math.floor(statistics.viewCount / 1000)}k views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
