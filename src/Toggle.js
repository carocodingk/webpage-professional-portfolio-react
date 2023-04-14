import React from "react";
import "./Toggle.css";

function Toggle({closeToggleMenu}){
    return(
        <div id="toggleModal" onClick={()=>{closeToggleMenu()}}>
            <div id="toggleMenu" className="column-container">
                <div id="toggleMenuOptions" className="column-container" onClick={()=>{closeToggleMenu()}}>
                    <a href="#Aboutme">About me</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Sayhello">Say Hello!</a>
                </div>
            </div>
        </div>
    );
}

export default Toggle;