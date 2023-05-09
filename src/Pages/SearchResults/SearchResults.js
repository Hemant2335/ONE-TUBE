import React, { useContext, useEffect } from "react";
import WidgetsIcon from '@mui/icons-material/Widgets';
import Card from '../../components/Card/Card';
import { Context } from "../../components/context";
const SearchResults = () => {
    const {Search , Title }  = useContext(Context);

  useEffect(()=>{
    console.log(Search);
    console.log(Title);
  },[Search])

  return (
    <div>
      <div className="container h-full">
        <h3><WidgetsIcon sx={{fontSize:30}}/>  {Title}</h3>
        <div className="grid grid-cols-3 gap-3 mt-3 min-h-screen h-max">
        {Search?.map((item)=>{
            return (
              <>
              <Card video = {item?.video}/>
              </>
            )
        })}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;