import React from "react";
import "./Modal.css";

function Modal (props){
  let w = window.innerWidth;
  console.log(w);
  
  return(
    <div id="modal" onClick={()=>{props.closeToggleMenu()}}>
    </div>
  );
}

export default Modal;