import React from "react";
import "./Navbar.scss";
import NetflixLogo from "../../images/Netflix Logo.png";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ProfilrIcon from "../../images/profileIcon.jpg";
import { useState } from "react";

const Navbar = () => {
const [isScrolled,setIsScrolled]=useState(false);

window.onscroll=()=>{
    setIsScrolled(window.pageYOffset===0?false:true);
    return ()=>(window.onscroll=null);
}

console.log(isScrolled,window.pageYOffset)
  return (
    <div className={isScrolled?"navbar scrolled profile":"navbar"}>
      <div className="container">
        <div className="left">
          <img src={NetflixLogo} alt="Netflix Logo" />
          <span className=""><b>Home</b>  </span>
          <span className=""> <b>Series</b></span>
          <span className=""><b>Movies</b> </span>
          <span className=""><b>New and Popular</b> </span>
          <span className=""><b>My List</b></span>
        </div>
        <div className="right">
          <SearchIcon className="nav-icons" />
          <NotificationsIcon className="nav-icons" />
          <img src={ProfilrIcon} alt="Profile-Image" />
          <div className="profile">
            <ArrowDropDownIcon className="nav-icons" />
            <div className={isScrolled?"options":"alter-options"}>
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
