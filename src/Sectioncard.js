import React from "react";
import "./Sectioncard.css";

function Sectioncard({sectioncardName, component}){
  return (
    <div id="sectionCard">
      <h2 id="sectioncardName">{sectioncardName}</h2>
      <div id="sectioncardComponent">{component}</div>
    </div>
  );
}

export default Sectioncard;