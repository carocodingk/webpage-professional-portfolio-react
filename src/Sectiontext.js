import React from "react";

// props = {
//   text: []
// }

// { key: nameOfVariable } = obj
// const { text: texts } = props
// texts of props.text 


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