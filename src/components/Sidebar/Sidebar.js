import React, { useContext } from "react";
import "./Sidebar.css";
import avtr from "./7309681.jpg"
import MenuIcon from '@mui/icons-material/Menu';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SchoolIcon from '@mui/icons-material/School';
import DiamondIcon from '@mui/icons-material/Diamond';
import { Context } from "../context";
import { useNavigate } from "react-router-dom";
import zIndex from "@mui/material/styles/zIndex";


const Sidebar = () => {

  const {setCategories , setTitle}  = useContext(Context);

  const navigate = useNavigate()

  const clickhandle = (name  , type)=>{
    
    switch (type) {
      case "Category":
        {
          setCategories(name);
          setTitle(name);
        }
      case "home" : 
      {
        setCategories(name);
        setTitle(name);
      }
      default:
        break;
    }
  }

  return (
    <div>
      <div className="sidebar z-20">
            <a href=""><div className="drawer "><MenuIcon sx={{fontSize:30}}/></div></a>
            <div className="avtr"><a href=""><img src={avtr} alt="avtr" /></a></div>
            <div className="list">
                <ul>
                    <li onClick = {()=>{clickhandle("New","home"); navigate('/')}}><a href=""><HomeMaxIcon sx={{fontSize:30}}/></a></li>
                    <li onClick = {()=>{clickhandle("Trending","Category"); navigate('/')}}><a href=""><WhatshotIcon sx={{fontSize:30}}/></a></li>
                    <li onClick = {()=>{clickhandle("Music","Category"); navigate('/')}}><a href=""><MusicNoteIcon sx={{fontSize:30}}/></a></li>
                    <li onClick = {()=>{clickhandle("Films","Category"); navigate('/')}}><a href=""><MovieIcon sx={{fontSize:30}}/></a></li>
                    <li onClick = {()=>{clickhandle("Live","Category"); navigate('/')}}><a href=""><LiveTvIcon sx={{fontSize:30}}/></a></li>
                    <li onClick = {()=>{clickhandle("Gaming","Category")}}><a href=""><SportsEsportsIcon sx={{fontSize:30}}/></a></li>
                    <li onClick = {()=>{clickhandle("News","Category")}}><a href=""><NewspaperIcon sx={{fontSize:30}}/></a></li>
                    <li onClick = {()=>{clickhandle("Sports","Category")}}><a href=""><SportsCricketIcon sx={{fontSize:30}}/></a></li>
                    <li onClick = {()=>{clickhandle("Learning","Category")}}><a href=""><SchoolIcon sx={{fontSize:30}}/></a></li>
                    <li onClick = {()=>{clickhandle("Fashion & beauty","Category")}}><a href=""><DiamondIcon sx={{fontSize:30}}/></a></li>
                </ul>
            </div>
      </div>

    </div>
  );
};

export default Sidebar;
