import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-[#03203C] text-white md:px-10 py-8 px-2">
      <div className="md:grid md:grid-cols-3">
        <div className="footer__section">
          <h3 className="footer__title text-2xl mb-3">Sports Fusion Camp</h3>
          <div className="flex gap-5 text-xl mb-3">
            <Link to="#" className="footer__social-link">
              <FaFacebook />
            </Link>
            <Link to="#" className="footer__social-link">
              <FaTwitter />
            </Link>
            <Link to="#" className="footer__social-link">
              <FaInstagram />
            </Link>
          </div>
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Sports Fusion Camp. All rights
            reserved.
          </p>
        </div>
        <div className="footer__section">
          <h3 className="footer__title text-2xl mb-3">Contact Us</h3>
          <p className="footer__contact-info mb-3">Phone: (123) 456-7890</p>
          <p> Email: info@sportsfusioncamp.com</p>
        </div>
        <div className="footer__section">
          <h3 className="footer__title text-2xl mb-3">About</h3>
          <p className="footer__about">
            Sports Fusion Camp is a premier sports experience that combines
            various athletic activities, aiming to foster teamwork and skill
            development.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
