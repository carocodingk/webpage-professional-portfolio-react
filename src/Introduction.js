import React from "react";
import "./Introduction.css";
import aboutme from "./content/Aboutme.json"

function Introduction({image}){
  return(
    <div id="introDiv">
      <img id="introImage" src={image}></img>
      <div id="introText">
        <p id="introName">{aboutme.name}</p>
        <p id="introProfession">{aboutme.profession}</p>
      </div>
    </div>
  );
}

export default Introduction;