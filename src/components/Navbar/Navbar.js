import React from "react";
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () => {
  return (
    <div>
        <div className="navbar">
        <div className="logo"><h1>One</h1><h2>Tube</h2></div>
            <input type="text" placeholder="Search" className="search"/>
            <div className="btndiv"><button className="button"><SearchIcon/></button></div>
        </div>
        <div className="icons">
            hii
        </div>
    </div>
  );
};
export default Navbar;
