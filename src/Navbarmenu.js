import React from "react";
import "./Navbarmenu.css";

function Navbarmenu(){
  return(
    <div id="navbarMenu">
      <a href='#Aboutme'><button>About me</button></a>
      <a href="#Projects"><button>Projects</button></a>
      <a href="#Sayhello"><button>Say Hello!</button></a>
    </div>
  );
}

export default Navbarmenu;