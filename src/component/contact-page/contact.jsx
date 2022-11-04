import React, { Component } from "react";
import zuriLogo from "../all-images/Vector.png";
import i4gLogo from "../all-images/I4G.png";
import "./contact.css";

class contact extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstname: "",
       lastname: "",
       message: ""
    }
  }
  userFirstNameChange = (event) => {
    this.setState({
      firstname: event.target.value
    })
  }
  userLastNameChange = (event) => {
    this.setState({
      lastname: event.target.value
    })
  }
  userMessageChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }
  userEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  
  handleSubmit = (event) => {
    alert(`message sent`);
    event.preventDefault();
  };
  render() {
    const { name, firstname, lastname, email, message } = this.props;
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
                <div id="first_name_">
                  <input
                    id="first_name"
                    value={firstname}
                    onChange={this.userFirstNameChange}
                    type="text"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
              </div>
              <div id="lastname">
                <label for="name">Last name</label>
                <div id="last_name_">
                  <input
                    id="last_name"
                    value={lastname}
                    onChange={this.userLastNameChange}
                    type="text"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="email">
              <label for="email">Email</label>
              <div id="email_">
                <input
                  id="email"
                  value={email}
                  onChange={this.userEmailChange}
                  type="email"
                  placeholder="yourname@gmail.com"
                  required
                />
              </div>
            </div>
            <div className="Message">
              <label for="text">Message</label>
              <div id="message_">
                <textarea
                  id="message"
                  value={message}
                  onChange={this.userMessageChange}
                  placeholder="Send me a message and i'll reply you as soon as possible"
                ></textarea>
              </div>
            </div>

            <div className="checkbox">
              <input type="checkbox" id="checkbox" />
              <label for="checkbox" className="checkbox_span">
                You agree to providing your data to {name} who may contact you
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
}

export default contact;
