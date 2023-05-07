import React from "react";
import "./Sidebar.css";
import youtubelogo from "../Navbar/yt_logo_rgb_dark.png";
import { UilAlignCenterAlt } from "@iconscout/react-unicons";
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
            <a href=""><div className="drawer"><UilAlignCenterAlt/></div></a>
      </div>
    </div>
  );
};

export default Sidebar;
