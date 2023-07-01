import React, { useContext } from "react";
import "./PageCart.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { AppContext } from "../../Components/AppContext/AppContext";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Email from "../Email/Email";
import Accordion from "react-bootstrap/Accordion";
import { Animated } from "react-animated-css";
const PageCart = () => {
  const { cart, changeQty, delete_cart, bill, email_handle, scrolltotop } =
    useContext(AppContext);
  return (
    <div className="pagecart">
      <Container fluid="lg">
        <Animated
          animationIn="bounceInLeft"
          isVisible={true}
          animationInDelay={500}
        >
          <div className="head-page">
            <Link className="head-icon" to="/">
              <AiOutlineHome />
            </Link>
            <p className="head-separate">|</p>
            <p className="head-name">Shopping Cart</p>
          </div>
        </Animated>
      </Container>

      {cart.map((pizza, index) => {
        return (
          <Container
            key={index}
            fluid="lg"
            className="grid-pagecart"
            data-aos="zoom-in"
          >
            <div className="pagecart-left">
              <img src={pizza.img[0]} alt="" />
              <p className="pagecart-heading">{pizza.name}</p>
            </div>
            <div className="pagecart-right">
              <div className="pagecart-prices">
                <div className="quantity">
                  <InputGroup className="mb-3">
                    <Button
                      variant="outline-secondary"
                      onClick={() => changeQty(pizza.id, -1)}
                    >
                      -
                    </Button>
                    <Form.Control value={pizza.qty} readOnly />
                    <Button
                      variant="outline-secondary"
                      onClick={() => changeQty(pizza.id, 1)}
                    >
                      +
                    </Button>
                  </InputGroup>
                </div>
              </div>
              <p className="pagecart-pricing">
                {(pizza.prices * pizza.qty).toFixed(2)} <span>$</span>
              </p>
              <BsTrash
                className="pagecart-trash"
                onClick={() => {
                  delete_cart(pizza.id);
                }}
              />
            </div>
          </Container>
        );
      })}
      <Container fluid="lg" className="pagecart-paybill" data-aos="fade-up">
        <p className="pagecart-bill">
          Total: {bill} <span>$</span>
        </p>
        <Link to="/order/tradi" className="continue-shop">
          &larr; Shopping
        </Link>
        <Link
          to="/checkout"
          className="continue-shop"
          onClick={() => {
            email_handle();
            scrolltotop();
          }}
        >
          Check out
        </Link>
      </Container>
      <Container fluid="lg" className="Question-accordion">
        <Accordion defaultActiveKey="0" flush data-aos="fade-up">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              How long will it take for me to receive the cake?
            </Accordion.Header>
            <Accordion.Body>
              Within 20 minutes if you are far away. Only 10 minutes if you are
              in 2km radius.But don't worry, we promise to deliver within 30
              minutes at the latest.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How will I pay?</Accordion.Header>
            <Accordion.Body>
              You will pay directly to the shipper or transfer to us. The bank
              account number is written in the reply email
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How do I know I have ordered a cake?
            </Accordion.Header>
            <Accordion.Body>
              At the end of the process, we will send a confirmation email and
              call back to make sure the cake has been ordered.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Do I need to login to order?</Accordion.Header>
            <Accordion.Body>
              You don't need to, you just need to press the 'check out' button.
              Then fill in the required information. The login feature will be
              added after the store grows
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default PageCart;
