import React from "react";
import "./OurServices.css";
import { Col, Container, Row } from "react-bootstrap";
import choose from "./imgs/choose.png";
import pizzaslice from "./imgs/slicepizza.png";
import delivery from "./imgs/delivery.png";
import support from "./imgs/support.png";
const OurServices = () => {
  return (
    <div className="section-services">
      <Container fluid="lg">
        <span className="subheading" data-aos="fade-right">
          Why Choose Us
        </span>
        <h2 className="heading-secondary" data-aos="fade-right">
          Always satisfying customers based on 3 criteria
        </h2>
      </Container>
      <Container fluid="lg" data-aos="zoom-in">
        <Row className="align-items-center gap-support">
          <Col className="services-col">
            <img src={choose} alt="why choose us" className="img-services" />
          </Col>
          <Col>
            <div className="services-reasons">
              <div className="reasons-box">
                <div className="reason-img-box">
                  <img src={pizzaslice} alt="" className="choose-img" />
                </div>
                <div className="reasons-content-box">
                  <p className="content-heading">Choose From Anywhere</p>
                  <p className="content-sub">
                    You can order pizza at anywhere by your phone without
                    comming to store.
                  </p>
                </div>
              </div>
              <div className="reasons-box">
                <div className="reason-img-box">
                  <img src={delivery} alt="" className="choose-img" />
                </div>
                <div className="reasons-content-box">
                  <p className="content-heading">We Delivery Your Meals</p>
                  <p className="content-sub">
                    Just 10 minitues to delevery to your home. Your meals always
                    hot.
                  </p>
                </div>
              </div>
              <div className="reasons-box">
                <div className="reason-img-box">
                  <img src={support} alt="" className="choose-img" />
                </div>
                <div className="reasons-content-box">
                  <p className="content-heading">Strong Customer Support</p>
                  <p className="content-sub">
                    Answer and support all your problems with a kindness and
                    attitude.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurServices;
