import React from "react";
import Sectiontitle from "./Sectiontitle";
import Sectiontext from "./Sectiontext";
import "./Aboutme.css";

function Aboutme({ aboutme }){
  return(
    <div id="aboutmeFrame">
      <div id="aboutmeInfo">
        <Sectiontitle id="aboutmeTitle" title={aboutme.title} /> 
        <Sectiontext text={aboutme.text} />
      </div>
      <img src={require(`${aboutme.image}`)}></img>
    </div>
  );
}

export default Aboutme;
