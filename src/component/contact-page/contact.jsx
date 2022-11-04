import React, { Component } from "react";
import zuriLogo from "../all-images/Vector.png";
import i4gLogo from "../all-images/I4G.png";
import "./contact.css";

class contact extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
  }
  render() {
    const { name } = this.props;
    return (
      <div id="wrapper">
        <div id="form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <div className="headline">
              <h2>Contact Me</h2>
              <p>
                Hi there, contact me to ask me about anything you have in mind.
              </p>
            </div>
            <div className="first-lastname">
              <div className="firstname">
                <label for="name">First name</label>
                <div id="first_name">
                  <input type="text" placeholder="Enter your first name" />
                </div>
              </div>
              <div id="lastname">
                <label for="name">Last name</label>
                <div id="last_name">
                  <input type="text" placeholder="Enter your last name" />
                </div>
              </div>
            </div>

            <div className="email">
              <label for="email">Email</label>
              <div id="email">
                <input type="email" placeholder="yourname@gmail.com" />
              </div>
            </div>
            <div className="Message">
              <label for="text">Message</label>
              <div id="message">
                <textarea placeholder="Send me a message and i'll reply you as soon as possible"></textarea>
              </div>
            </div>

            <div className="checkbox">
              <input type="checkbox" id="checkbox" />
              <label for="checkbox" className="checkbox_span">
                You agree to providing your data to {name} who may contact you
              </label>
            </div>

            <div className="submit_btn">
              <p>Send message</p>
            </div>
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
}

export default contact;
