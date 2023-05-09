import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import {Context} from "../context"
import { useContext } from "react";
import { useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [setsearch, setsetsearch] = useState("");
  const { loading , setSearch , setCategories } = useContext(Context);

  const navigate = useNavigate();

  const setsearchquery = (e) => {
    if (
      (e?.key === "Enter" || e === "search-button") &&
      setsearch?.length > 0
    ) {
      setCategories(setsearch);
      navigate(`./searchResult/${setsearch}`);
    }
  };

  const { pathname } = useLocation();
  const pagename = pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <div>
      <div className="navbar z-10">
        <Link to="/">
        <div className="logo">
          <h1>One</h1>
          <h2>Tube</h2>
        </div>
        </Link>
        <input type="text" placeholder="Search" className="search"
        onChange={(e)=>setsetsearch(e.target.value)}
        onKeyUp={setsearchquery} 
        value={setsearch}/>
        <div className="btndiv" >
          <button className="search" onClick={setsearchquery} >
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="icons">hii</div>
    </div>
  );
};
export default Navbar;
