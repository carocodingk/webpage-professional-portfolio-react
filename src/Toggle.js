import React from "react";
import "./Toggle.css";

function Toggle({closeToggleMenu}){
    return(
        <div id="toggleModal" onClick={()=>{closeToggleMenu()}}>
            <div id="toggleMenuOptions" onClick={()=>{closeToggleMenu()}}>
                <a href="#Aboutme">About me</a>
                <a href="#Projects">Projects</a>
                <a href="https://github.com/carocodingk" target="_blank">Github</a>
                <a href="#Sayhello">Say Hello!</a>
            </div>
        </div>
    );
}

export default Toggle;