import React from "react";

const Nav = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      {/* left */}
      <div className="flex col-span-3">
        <img className="h-8" src="" alt="=" />
        <img className="h-8 mx-2" src="" alt="YT-logo" />
      </div>
      {/* Middle */}
      <div className="col-span-9">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          placeholder="Search here....."
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>
      {/* right */}
      <div className="col-span-1">
        <img className="h-8" src="" alt="profile" />
      </div>
    </div>
  );
};

export default Nav;
