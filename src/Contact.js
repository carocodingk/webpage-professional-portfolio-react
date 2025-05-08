import React from "react";
import aboutme from "./content/Aboutme.json"

import "./Contact.css";

function Contact(){
  return(
    <div id="contactDiv">
      <iframe src={aboutme.contact_form} width="640" height="720" frameborder="0" marginheight="0" marginwidth="0">
        Loading…
      </iframe>        
    </div>
  );
}
export default Contact;