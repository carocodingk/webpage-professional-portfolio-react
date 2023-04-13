import React from "react";

import "./Contact.css";

function Contact(){
  return(
    <div id="contactDiv">
      <form>
        <label for="name">Name</label>
        <input type="text" id="name"  placeholder="Your name" />

        <label for="email">Email</label>
        <input type="email" id="email"  placeholder="Your email" />

        <label for="message">Message</label>
        <textarea id="message"  placeholder="Your message" ></textarea>

      </form>
    </div>
  );
}
export default Contact;