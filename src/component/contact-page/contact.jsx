import React, { useState } from "react";
import zuriLogo from "../all-images/Vector.png";
import i4gLogo from "../all-images/I4G.png";
import "./contact.css";

function Contact() {
   // Textarea input validation code
  const [message, setTextArea]=useState('')
  const [error, setError]=useState(false)

  // Form submission validation code
  const handleSubmit = (event) => {
    event.preventDefault();
    if(message.length === 0) {
      setError(true)
    }
    if(message) {
      alert(`message sent`)
    }
    
  };
   
    return (
      <div id="wrapper">
        <div id="form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="headline">
              <h2>Contact Me</h2>
              <p>
                Hi there, contact me to ask me about anything you have in mind.
              </p>
            </div>
            <div className="first-lastname">
              <div className="firstname">
                <label htmlFor="name">First name</label>
                <div id="first_name_">
                  <input
                    id="first_name"
                    type="text"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
              </div>
              <div id="lastname">
                <label htmlFor="name">Last name</label>
                <div id="last_name_">
                  <input
                    id="last_name"
                    type="text"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <div id="email_">
                <input
                  id="email"
                  type="email"
                  placeholder="yourname@gmail.com"
                  required
                />
              </div>
            </div>
            <div className="Message">
              <label htmlFor="text">Message</label>
              <div id="message_">
                <textarea
                onChange={e=>setTextArea(e.target.value)}
                  id="message"
                  placeholder="Send me a message and i'll reply you as soon as possible"
                ></textarea>
              </div>
              {error&&message.length<=0?
              <span id="Textarea_error_span">Please enter a message</span>:""}
            </div>

            <div className="checkbox">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="checkbox_span">
                You agree to providing your data to Ikenna who may contact you
              </label>
            </div>

            <button id="btn__submit">
              <div className="submit_btn">Send message</div>
            </button>
          </form>
        </div>
        <footer>
          <img src={zuriLogo} className="zuriLogo" alt="zuri__logo" />
          <h2>HNG Internship 9 Frontend Task</h2>
          <img src={i4gLogo} alt="i4g__logo" />
        </footer>
      </div>
    );
  }

export default Contact;
