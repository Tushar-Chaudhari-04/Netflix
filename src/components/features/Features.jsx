import React from "react";
import "./features.scss";
import MoneyHeistImg from "../../images/moneyHWhite.jpg";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const Features = () => {
  return (
    <div className="features">
      <img
        className="feature-img"
        width="100%"
        src={MoneyHeistImg}
        alt="Money Heist"
      />
      <div className="feature-info">
        {/* <img src={MoneyHeistTitle} alt="MoneyHeistTitle" /> */}
        <h1><span style={{color:"whitesmoke",backgroundColor:"black",padding:"5px"}}>Money</span> <span style={{color:"black",backgroundColor:"red",padding:"6px"}}>Heist</span></h1>
        <span className="desc">
          Eight thieves take hostages and lock themselves in the Royal Mint of
          Spain as a criminal mastermind manipulates the police to carry out his
          plan. Watch all you want. This riveting crime series won Best Drama at
          the International Emmy Awards, Premios Fénix and Premios Iris (plus
          six more Iris wins).
        </span>
        <div className="feature-buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
