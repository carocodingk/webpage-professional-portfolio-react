import React from "react";
import "./Sectiontext.css";

function Sectiontext({text: texts}){
  const text = texts.map(paragraph => {
    return(    
      <p>{paragraph}</p>
    );
  }

  );

  return(
    <div id="sectionText">
      {text}
    </div>
  );
}

export default Sectiontext;