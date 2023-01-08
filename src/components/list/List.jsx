import React from 'react'
import "./List.scss"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { ListItem } from '@material-ui/core';
import ListItems from '../listitems/ListItems';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useRef } from 'react';
import { useState } from 'react';
const List = () => {
    const [slideNumber,setSlideNumber]=useState(0);
    const [isMoved,setIsMoved]=useState(false);
    const listRef=useRef();
    
    const handleClick=(direction)=>{
        setIsMoved(true);
        let distance=listRef.current.getBoundingClientRect().x;
        console.log("distance",distance)
        distance=distance===0?230:distance-50;
        console.log("Modifieddistance",distance)
        if(direction==="left" && slideNumber>0){
            setSlideNumber(slideNumber-1);
            console.log("left",slideNumber);
            listRef.current.style.transform=`translateX(${230+distance}px)`
        }

        if(direction==="right" && slideNumber<5){
            setSlideNumber(slideNumber+1);
            console.log("right",slideNumber);
            listRef.current.style.transform=`translateX(${-230+distance}px)`
        }

        console.log(distance);
    }

  return (
    <div className='list'>
      <span className='listTitle'>Continue to Watch</span>
      <div className='wrapper'>
        <ArrowBackIosIcon 
            className='sliderArrow left' 
            onClick={()=>{handleClick("left")}}
            style={{display:!isMoved && "none"}}    
            />
        <div className='container' ref={listRef}>
            <ListItems/>
            <ListItems/>
            <ListItems/>
            <ListItems/>
            <ListItems/>
            <ListItems/>
            <ListItems/>
            <ListItems/>
            <ListItems/>
            <ListItems/>
        </div> 
        <ArrowForwardIosIcon className='sliderArrow right' onClick={()=>{handleClick("right")}}/>
      </div>
    </div>
  )
}

export default List