import React from "react";
import "./Contact.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>SUBSCRIBE TO OUR NEWSLETTER!</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button>THANKS!</button>
        </div>
        <div className="icons">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;
