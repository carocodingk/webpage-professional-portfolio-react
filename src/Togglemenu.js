import React from "react";
import "./Togglemenu.css";

let windowWidth = 1920;

function Togglemenu({closeToggleMenu}){
  return(
    <div id="toggleMenu" className="column-container">
      <button id="closeButton" onClick={()=>{closeToggleMenu()}}><span className="material-symbols-outlined">close</span></button>
      <div id="toggleMenuOptions" className="column-container">
        <a href="#Aboutme"><button>About me</button></a>
        <a href="#Projects"><button>Projects</button></a>
        <a href="https://www.google.com"><button>Say Hello!</button></a>
      </div>
    </div>
  );
}

export default Togglemenu;