import React from "react";
import "./LocationStore.css";
import { Container, Row, Col } from "react-bootstrap";
import pizzacombo from "./imgs/pizzacombo.jpg";
import { ImLocation } from "react-icons/im";

const LocationStore = () => {
  return (
    <div className="section-location" id="location">
      <Container fluid="lg">
        <span className="subheading" data-aos="fade-right">
          Location
        </span>
        <h2 className="heading-secondary" data-aos="fade-right">
          Our restaurant have three branches
        </h2>
      </Container>
      <Container fluid="lg">
        <Row className="align-items-center gap-support">
          <Col data-aos="fade-up" className="location-left">
            <img src={pizzacombo} alt="" className="location-img" />
          </Col>
          <Col className="location-right">
            <div data-aos="fade-up" className="location-content">
              <p className="location-local">Ho Chi Minh City</p>
              <p className="location-address">
                720A Điện Biên Phủ, Vinhomes Tân Cảng, Bình Thạnh District, Ho
                Chi Minh City, Viet Nam
              </p>
              <p className="location-time">
                <ImLocation /> Mon To Fri 9am-11pm
              </p>
            </div>
            <div data-aos="fade-up" className="location-content">
              <p className="location-local">Ha Noi</p>
              <p className="location-address">
                40 Cat Linh Street (Entrance 61 Giang Vo Street), Đống Đa
                District, Hà Nội, Viet Nam
              </p>
              <p className="location-time">
                <ImLocation /> Mon To Fri 9am-11pm
              </p>
            </div>
            <div data-aos="fade-up" className="location-content">
              <p className="location-local">Da Nang City</p>
              <p className="location-address">
                101 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son District,
                550000 Da Nang, Viet Nam
              </p>
              <p className="location-time">
                <ImLocation /> Mon To Fri 9am-11pm
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LocationStore;
