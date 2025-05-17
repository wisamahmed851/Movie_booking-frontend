import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="newslater-section padding-bottom">
        <div className="container mx-auto px-4">
          <div
            className="newslater-container bg_img"
            data-background="frontend/images/newslater/newslater-bg01.jpg"
          >
            <div className="newslater-wrapper">
              <h5 className="cate">subscribe to Boleto </h5>
              <h3 className="title">to get exclusive benifits</h3>
              <form className="newslater-form">
                <input type="text" placeholder="Your Email Address" />
                <button type="submit">subscribe</button>
              </form>
              <p>We respect your privacy, so we never share your info</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="footer-top">
          <div className="logo">
            <a href="index-1.html">
              <img src="/frontend/images/logo/logo.png" alt="footer" />
            </a>
          </div>
          <ul className="social-icons">
            <li>
              <a href="#0">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#0" className="active">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-google"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-area">
            <div className="left">
              <p>
                Copyright © 2020. All Rights Reserved By{" "}
                <a href="#0">Boleto </a>
              </p>
            </div>
            <ul className="links">
              <li>
                <a href="#0">About</a>
              </li>
              <li>
                <a href="#0">Terms Of Use</a>
              </li>
              <li>
                <a href="#0">Privacy Policy</a>
              </li>
              <li>
                <a href="#0">FAQ</a>
              </li>
              <li>
                <a href="#0">Feedback</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
