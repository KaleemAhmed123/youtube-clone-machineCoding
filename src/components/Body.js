import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      {/* / par mainContainer and /watch par watchPage (in children) */}
      <Outlet />
    </div>
  );
};

export default Body;
