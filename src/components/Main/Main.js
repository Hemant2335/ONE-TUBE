import React from "react";
import "./Main.css";
import WidgetsIcon from '@mui/icons-material/Widgets';
const Main = () => {
  return (
    <div>
      <div className="container h-full">
        <h3><WidgetsIcon sx={{fontSize:30}}/> Recommended</h3>
        <div className="grid grid-cols-3 gap-3 mt-3">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>

        </div>
        
      </div>
    </div>
  );
};
export default Main;
