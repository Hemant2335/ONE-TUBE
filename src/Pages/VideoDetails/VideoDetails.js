import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import "./VideoDetails.css"
import Card from '../../components/Card/Card';
import { Context } from '../../components/context';
import Loading from "../../components/Loading/Loading"
const VideoDetails = () => {

    const {Search , loading} = useContext(Context);

    const {videoId} = useParams();
    const base_url = "https://www.youtube.com/embed/"

    return <div className='video-detail min-h-screen h-auto'>
        {(loading)?<Loading/>:(<div className='Playing-video flex '>
        <iframe width="900" height="450" src={`${base_url}${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" ></iframe>
        <div className="recommn mt-1 mx-5">
            <h1 className='mb-3'>You also Like</h1>
            <div className="likes flex flex-col gap-5">
            {Search?.map((item)=>{
            return (
              <>
              <Card video = {item?.video}/>
              </>
            )
        })}
            </div>
            
        </div>
        </div>)}
    </div>;
}

export default VideoDetails;