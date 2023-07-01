import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import logo from "./imgs/Logo.png";
const Footer = () => {
  return (
    <div className="footer" id="contact">
      <Container fluid="lg">
        <Row className="gap-support-footer">
          <Col xs="6" md="3" className="logo-col">
            <div className="header-logo mb-5">
              <img className="logo" src={logo} alt="" />
            </div>
            <div className="socials-links">
              <a
                target="_blank"
                className="footer-link"
                href="https://www.instagram.com/nhtk99/"
              >
                <BsInstagram className="social-icon" />
              </a>
              <a
                className="footer-link"
                href="https://www.facebook.com/thekha.99/"
                target="_blank"
              >
                <BsFacebook className="social-icon" />
              </a>
              <a className="footer-link" href="#">
                <BsTwitter className="social-icon" />
              </a>
            </div>
            <p className="copy-right">
              CopyRight &copy; <span className="year">2027 </span> by Kha's
              Pizza, Inc. All rights reserved.
            </p>
          </Col>
          <Col xs="6" md="3" className="address-col">
            <p className="footer-heading">Contact Us</p>
            <div className="contacts">
              <p className="address">
                369 Ly Thai To Street, 9 Ward, District 10, Ho Chi Minh City.
              </p>
              <a className="footer-link" href="tel:6801717770">
                123-456-789
              </a>
              <br />
              <a className="footer-link" href="tel:6801717770">
                680-171-7770
              </a>
              <br />
              <a className="footer-link" href="mailto:teekay01999@gmail.com">
                teekay01999@gmail.com
              </a>
            </div>
          </Col>
          <Col xs="4" md="2" className="nav-col">
            <p className="footer-heading">Account</p>
            <div className="footer-nav">
              <a className="footer-link" href="#">
                Create account
              </a>
              <a className="footer-link" href="#">
                Sign in
              </a>
              <a className="footer-link" href="#">
                iOS app
              </a>
              <a className="footer-link" href="#">
                Android app
              </a>
            </div>
          </Col>
          <Col xs="4" md="2" className="nav-col">
            <p className="footer-heading">Company</p>
            <div className="footer-nav">
              <a className="footer-link" href="#">
                About Us
              </a>
              <a className="footer-link" href="#">
                Site Map
              </a>
              <a className="footer-link" href="#">
                Cooking partners
              </a>
              <a className="footer-link" href="#">
                Careers
              </a>
              <a className="footer-link" href="#">
                Specials
              </a>
            </div>
          </Col>
          <Col xs="4" md="2" className="nav-col">
            <div className="nav-col">
              <p className="footer-heading">Services</p>
              <div className="footer-nav">
                <a className="footer-link" href="#">
                  Contact Us
                </a>
                <a className="footer-link" href="#">
                  Returns
                </a>
                <a className="footer-link" href="#">
                  Site Map
                </a>

                <a className="footer-link" href="#">
                  Affiliate
                </a>
                <a className="footer-link" href="#">
                  Brands
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.570044535168!2d106.6673031758075!3d10.767581959355285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ee73651d959%3A0x3918cb8ad4cfe4d7!2zMzY5IMSQLiBMw70gVGjDoWkgVOG7lSwgUGjGsOG7nW5nIDksIFF14bqtbiAxMCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1687433873015!5m2!1svi!2s"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="footer-map"
        ></iframe>
      </Container>
    </div>
  );
};

export default Footer;
