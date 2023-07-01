import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./OurProducts.css";
import pizzahaisan from "./Images/pizzahaisan.png";
import pizzatruyenthong from "./Images/traditional pizza.png";
import pizzathapcam from "./Images/mixedpizza.png";

const OurProducts = () => {
  return (
    <div className="section-how">
      <Container fluid="lg">
        <span className="subheading" data-aos="fade-right">
          Our Products
        </span>
        <h2 className="heading-secondary" data-aos="fade-right">
          Our restaurant offers 3 types of pizza
        </h2>
      </Container>
      <Container fluid="lg" className="mb-support">
        <Row className="align-items-center gap-support">
          <Col xs={12} sm>
            <p className="step-number" data-aos="fade-right">
              01
            </p>
            <h3 className="heading-tertiary" data-aos="fade-right">
              Traditional Pizza
            </h3>
            <p className="text-description" data-aos="fade-right">
              There are 6 types of traditonal pizza such as Pineapple Grilled
              Chicken Pizza, Cheese Pizza, Italian Sausage Pizza, Ham & Mushroom
              Pizza, Pizza Hawaiian, Vegetable Pizza. Traditional Pizza familiar
              with almost people. This is always the good choice for anyone.
            </p>
          </Col>

          <Col xs={12} sm className="step-img-box ">
            <img
              src={pizzatruyenthong}
              alt="Pizza Hai San"
              className="step-img"
              data-aos="fade-right"
            />
          </Col>
        </Row>
      </Container>
      <Container fluid="lg" className="mb-support">
        <Row className="align-items-center gap-support">
          <Col xs={12} sm className="step-img-box ">
            <img
              src={pizzahaisan}
              alt="Pizza Hai San"
              className="step-img"
              data-aos="fade-right"
            />
          </Col>
          <Col xs={12} sm>
            <p className="step-number" data-aos="fade-right">
              02
            </p>
            <h3 className="heading-tertiary" data-aos="fade-right">
              {" "}
              Seafood Pizza
            </h3>
            <p className="text-description" data-aos="fade-right">
              There are 4 types of traditonal pizza such as Pizza Seafood
              Cocktail, Premium Seafood Pizza, Tropical Seafood Pizza, Pizza
              Shrimp Cocktail. If you are a fan of seafood, you should not miss
              it !!!
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid="lg">
        <Row className="align-items-center gap-support">
          <Col xs={12} sm>
            <p className="step-number" data-aos="fade-right">
              03
            </p>
            <h3 className="heading-tertiary" data-aos="fade-right">
              Mixed Pizza
            </h3>
            <p className="text-description" data-aos="fade-right">
              There are 6 types of mixed pizza such as Pizza Aloha, Bacon Pizza,
              Canadian Ham Pizza, Grilled Chicken Pizza with 3 Flavors, Pizza &
              5 Special Meats, Pizza with 5 Special Meats and Vegetables. We
              mixed many kind of meats, vegestable and lots of different flavour
              to make the best pizza.
            </p>
          </Col>

          <Col xs={12} sm className="step-img-box ">
            <img
              src={pizzathapcam}
              alt="Pizza Hai San"
              className="step-img"
              data-aos="fade-right"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurProducts;
