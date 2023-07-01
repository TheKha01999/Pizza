import React, { useContext } from "react";
import { AppContext } from "../../Components/AppContext/AppContext";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Email.css";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import Xegiaohang from "./xegiaohang.png";
import { Animated } from "react-animated-css";
import { useNavigate } from "react-router-dom";
const Email = () => {
  const {
    eproduct,
    bill,
    name,
    email,
    phone,
    setName,
    setEmail,
    setPhone,
    form,
    sendEmail,
    mess,
    setMess,
    address,
    setAddress,
    scrolltotop,
  } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="PageEmail">
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
            <p className="head-name">Check Out</p>
          </div>
        </Animated>
      </Container>
      <Container fluid="lg">
        <Animated
          animationIn="zoomInLeft"
          isVisible={true}
          animationInDelay={500}
        >
          <p className="paymentInfo">Payment information</p>
        </Animated>
      </Container>
      <Container fluid="lg" className="Email-form">
        <Animated
          animationIn="zoomInLeft"
          isVisible={true}
          animationInDelay={500}
        >
          <Form className="form_email" ref={form} onSubmit={sendEmail}>
            <Form.Group className="form-group">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                required
                name="user_name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone "
                required
                name="user_phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="email-address"
                type="email"
                placeholder="Enter email"
                required
                name="user_email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Address "
                required
                name="user_address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>Products order</Form.Label>
              <Form.Control
                type="text"
                value={eproduct.map((item) => ` ${item}`)}
                name="user_products"
                required
                readOnly
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>Total</Form.Label>
              <Form.Control
                type="text"
                value={`${bill} $`}
                name="user_totals"
                readOnly
              />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={mess}
                onChange={(e) => {
                  setMess(e.target.value);
                }}
              />
            </Form.Group>

            <Link to="/cart" className="emialbtb-back" onClick={scrolltotop}>
              &larr; Back to Cart
            </Link>
            <Button className="email_btn form-group" type="submit">
              Buy Now
            </Button>
          </Form>
        </Animated>
        <Animated
          animationIn="zoomInRight"
          isVisible={true}
          animationInDelay={500}
        >
          <img src={Xegiaohang} alt="" className="email-picture" />
        </Animated>
      </Container>
    </div>
  );
};

export default Email;
