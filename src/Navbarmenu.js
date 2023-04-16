import React from "react";
import "./Navbarmenu.css";

function Navbarmenu(){
  return(
    <div id="navbarMenu">
      <a href='#Aboutme'>About me</a>
      <a href="#Projects">Projects</a>
      <a href="https://github.com/carocodingk" target="_blank" rel="noreferrer">Github</a>
      <a href="#Sayhello">Say Hello!</a>
    </div>
  );
}

export default Navbarmenu;