import React,{useEffect ,useRef} from "react";
import "./ListItems.scss";
import Mangal from "../../images/Mission-Mangal.jpg";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import { Player } from 'video-react';
import axios from "axios";
import { requirePropFactory } from "@material-ui/core";
// import ReactPlayer from "react-player";

const ListItems = () => {





useEffect(() => {

  const getData=async()=>{
    try{
      // const data=await fetch(options.url);
      // console.log(data);
    }catch(err){
      console.log(err);
    }
   
  }

  //getData();
},[]);



  const [isHovered, setIsHovered] = useState(false);
 // const trailer = "https://www.youtube.com/embed/Qqpl_sAcQF8";
 //const trailer="http://techslides.com/demos/sample-videos/small.mp4"; 
 const trailer="https://www.youtube.com/embed/INOTrg-wQgE?autoplay=1&mute=1"
 const vidRef=useRef();
 return (
    <div
      className="listItems"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <img
        src="https://occ-0-358-3934.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS_Gmdn76DuUCKrJX_EQZo4JgxsPYoC5C8kQDUaTVUVY-uibCgyIWT84olM__arx7KTFohOuBpYO4C0u9ZhFi-lYoUgl9SfCG1Y.jpg?r=530"
        alt="MangalImg"
      />
      {/* <video src={trailer}  autoPlay={true} loop />   */}
      {isHovered && (
        <>
        {/* width="1349" height="480"  */}
        {/* <iframe 
        src={trailer} 
        title="Thackeray | Official Marathi Trailer | Nawazuddin Siddiqui, Amrita Rao | Releasing 25th January" 
        allow='autoPlay; encrypted-media'
        allowFullScreen autoPlay></iframe> */}

        {/* <iframe src="https://www.youtube.com/embed/Qqpl_sAcQF8?autoplay=1&mute=1" title="Thackeray | Official Trailer | Nawazuddin Siddiqui, Amrita Rao | Releasing 25th January" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}

        <video  ref={ vidRef }  autoPlay loop muted  >
          <source src={require("../../videos/Thackeray Trailer.mp4") }/>
          My Video
        </video>
          <div className="items-info">
            <div className="icons">
              <PlayArrowIcon className="itemIcon"/>
              <AddIcon className="itemIcon"/>
              <ThumbUpOutlinedIcon className="itemIcon"/>
              <ThumbDownAltOutlinedIcon className="itemIcon"/>
            </div>
            <div className="itemsInfoTop">
              <span>1 hour 30 mins</span>
              <span className="limit">+16</span>
              <span>2019</span>
            </div>

            <div className="itemDesc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>

            <div className="genere">Drama</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItems;
