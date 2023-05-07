import React from "react";
import "./Sidebar.css";
import avtr from "./7309681.jpg"
import MenuIcon from '@mui/icons-material/Menu';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
            <a href=""><div className="drawer"><MenuIcon sx={{fontSize:30}}/></div></a>
            <div className="avtr"><a href=""><img src={avtr} alt="avtr" /></a></div>
            <div className="list">
                <ul>
                    <li><a href=""><HomeMaxIcon sx={{fontSize:30}}/></a></li>
                </ul>
            </div>
      </div>

    </div>
  );
};

export default Sidebar;
