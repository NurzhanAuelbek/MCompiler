import React, { Component } from "react";
import "../css/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a
          href="https://kazmkpu.kz/kz"
          target="_blank"
          rel="noopener noreferrer"
          className="left-footer"
        >
          Kazmkpu

        </a>
        <a
          href="https://www.instagram.com/maral_yergalikyzy/"
          target="_blank"
          rel="noopener noreferrer"
          className="right-footer"
        >
          
          Maral ©2023

        </a>
      </div>
    );
  }
}
export default Footer;
