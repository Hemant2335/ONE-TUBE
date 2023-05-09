import React, { useContext } from 'react';
import "./Card.css"
import ReactPlayer from 'react-player';
import Poster from "./wallpaperflare.com_wallpaper (4).jpg"
import Videolength from '../Videolength/Videolength';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../context';

const Card = ({video}) => {

    const {setCategories} = useContext(Context);
    const navigate = useNavigate();

    const handlevideopage = (id , query)=>{
        setCategories(query);
        navigate(`./video/${query}`)
    }

    const intToString = (num) => {
        num = num?.toString().replace(/[^0-9.]/g, '');

        if (num < 1000)
        {
            return num;
        }

        let si = [
          {v: 1E3, s: "K"},
          {v: 1E6, s: "M"},
          {v: 1E9, s: "B"},
          {v: 1E12, s: "T"},
          {v: 1E15, s: "P"},
          {v: 1E18, s: "E"}
          ];
        let index;
        for (index = si.length - 1; index > 0; index--) {
            if (num >= si[index].v) {
                break;
            }
        }
        return (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[index].s;
    }

    return <div>
        <div className="card">
            <div className="player" onClick={()=>handlevideopage(video?.videoId , video?.title)}>
            {video?.lengthSeconds && (<Videolength time={video?.lengthSeconds}/>)}
            {(video?.thumbnails?.[1]?.url)? <Link><img src={video?.thumbnails?.[1]?.url} alt="" width={413}/></Link>  :<Link><img src={Poster} alt="" width={413}/></Link>}
            </div>
            <div className='about'>
        <div className="card-avtr"><img src={video?.author[0]?.url} alt="" />
        <h5>{video?.title.slice(0,80)}</h5>
        <p>{`${(intToString(video?.stats?.views))} - ${video?.publishedTimeText}`}</p>
        </div>                                                                          
        </div>
        </div>
        
    </div>;
}

export default Card;