import React from "react";
import dp from "./all-images/face-card.jpg";
import zuriLogo from "./all-images/Vector.png";
import i4gLogo from "./all-images/I4G.png";
import { SiSlack } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import "./preTask.css";
import { Link } from "react-router-dom";

function preTask() {
  return (
    <div>
      <div className="wrapper">
        <a href="#" id="shareBtn"><RiShareForwardLine/></a>
        <a href="#" id="menuBtn"><BsThreeDots/></a>
        <header>
          <img src={dp} id="profile__img" alt="profile-pic" />
          <div id="twitter">
            <a href="https://twitter.com/dWhy_Q">DwhyQ</a>
          </div>
          <h3 id="slack">Ikenna</h3>
        </header>
        <div id="link__section">
          <div id="btn__zuri">
            <a href="https://training.zuri.team/">Zuri Team</a>
          </div>
          <div id="books">
            <a href="http://books.zuri.team">Zuri Books</a>
          </div>
          <div id="book__python">
            <a href="https://books.zuri.team/python-for-beginners?ref_id=%3Cdwhyq%3E">
              Python Books
            </a>
          </div>
          <div id="pitch">
            <a href="https://background.zuri.team">
              Background Checks for Coders
            </a>
          </div>
          <div id="book__design">
            <a href="https://books.zuri.team/design-rules" title="You will be eligible for royalties if any sales of the book is made using you reference i.d">Design Books</a>
          </div>
          <div id="contact">
            <Link to="/contact">
              Contact Me
            </Link>
          </div>
        </div>
        <div id="slackAndGitIcon">
          <SiSlack />
          <BsGithub />
        </div>
      </div>

      <footer>
        <img src={zuriLogo} className="zuriLogo" alt="zuri__logo" />
        <h2>HNG Internship 9 Frontend Task</h2>
        <img src={i4gLogo} alt="i4g__logo" />
      </footer>
    </div>
  );
}

export default preTask;
