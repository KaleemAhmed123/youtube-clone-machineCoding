import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // subscribe only specific portion of store
  const isMenuOpen = useSelector((state) => state.bar.isMenuOpen);

  if (!isMenuOpen) return null; // early return
  return (
    <div className="w-56 h-[100vh] p-5 shadow-lg">
      <ul>
        <li className="text-lg pt-7">
          <Link to="/">Home</Link>
        </li>
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
