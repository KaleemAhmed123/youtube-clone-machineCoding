import React from "react";

const Sidebar = () => {
  return (
    <div className="w-48 h-[100vh] p-5 shadow-lg fixed">
      <ul>
        <li className="text-lg pt-7">Home</li>
        <li className="text-lg">Shorts</li>
        <li className="text-lg">Videos</li>
        <li className="text-lg">Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li className=" pb-7">Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
