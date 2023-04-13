import React from "react";
import "./Sectioncard.css";

function Sectioncard({sectioncardName, component}){
  return (
    <div id="sectionCard">
      <p id="sectioncardName">{sectioncardName}</p>
      <div id="sectioncardComponent">{component}</div>
    </div>
  );
}

export default Sectioncard;