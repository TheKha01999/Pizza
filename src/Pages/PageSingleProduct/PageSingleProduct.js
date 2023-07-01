import React, { useContext } from "react";
import { AppContext } from "../../Components/AppContext/AppContext";
import { AiOutlineHome } from "react-icons/ai";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";
import "./PageSingleProduct.css";
import ReactImageMagnify from "react-image-magnify";
import freeshipIMG from "./img/free_shipping_2.png";
import guaranteeIMG from "./img/guarantee.png";
import returnIMG from "./img/return.png";
import { Animated } from "react-animated-css";
const PageSingleProduct = () => {
  const { curr, img, handle_hover, handle_addCart2, changeQty2, sum_bill } =
    useContext(AppContext);
  return (
    <div className="SingleProduct">
      <Container fluid="lg">
        <Animated
          animationIn="bounceInLeft"
          isVisible={true}
          animationInDelay={800}
        >
          <div className="head-page">
            <Link className="head-icon" to="/">
              <AiOutlineHome />
            </Link>
            <p className="head-separate">|</p>
            <p className="head-name">{curr.name}</p>
          </div>
        </Animated>
      </Container>
      <Animated animationIn="pulse" isVisible={true} animationInDelay={500}>
        <Container fluid="lg" className="grid-single">
          <div>
            <ReactImageMagnify
              className="picture-main"
              {...{
                smallImage: {
                  alt: "Pizza",
                  isFluidWidth: true,
                  src: img,
                },
                largeImage: {
                  src: img,
                  width: 1200,
                  height: 900,
                },
                enlargedImageContainerDimensions: {
                  width: "100%",
                  height: "100%",
                },
              }}
            />

            <div className="picture-chain">
              {curr.img.map((image, index) => {
                return (
                  <img
                    key={index}
                    src={image}
                    alt=""
                    onMouseOver={() => handle_hover(image, index)}
                  />
                );
              })}
            </div>
          </div>

          <div className="SingleProduct-info">
            <h1 className="SingleProduct-heading">{curr.name}</h1>
            <div className="grid-info">
              <p>Brand:</p>
              <p>{curr.type}</p>
              <p>Product Code:</p>
              <p>{curr.name}</p>
              <p>Reward Points:</p>
              <p>600</p>
              <p>Availability:</p>
              <p>In Stock</p>
            </div>
            <p className="SingleProduct-pricing">
              {(curr.prices * curr.qty).toFixed(2)}{" "}
              <span className="currency">$</span>
            </p>
            <div className="SingleProduct-prices">
              <div className="quantity">
                <p className="Qty">Qty</p>
                <InputGroup className="mb-3">
                  <Button
                    variant="outline-secondary"
                    onClick={() => changeQty2(curr.id, -1)}
                  >
                    -
                  </Button>
                  <Form.Control value={curr.qty} readOnly />
                  <Button
                    variant="outline-secondary"
                    onClick={() => changeQty2(curr.id, 1)}
                  >
                    +
                  </Button>
                </InputGroup>
              </div>
            </div>
            <div className="SingleProduct-services">
              <div className="Single-service-box">
                <img src={freeshipIMG} alt="" />
                <div>
                  <p>Fast Shipping</p>
                  <p>Ships Today</p>
                </div>
              </div>
              <div className="Single-service-box ">
                <img src={returnIMG} alt="" />
                <div>
                  <p>Easy</p>
                  <p>Return</p>
                </div>
              </div>
              <div className="Single-service-box">
                <img src={guaranteeIMG} alt="" />
                <div>
                  <p>Lowest Price</p>
                  <p>Guarantee</p>
                </div>
              </div>
            </div>
            <button
              className="SingleProduct-btn"
              onClick={() => {
                handle_addCart2(curr.id);
                sum_bill();
                swal({
                  title: "Successfully!",
                  text: "Your pizza has been added!",
                  icon: "success",
                  button: "Close!",
                });
              }}
              alt=""
            >
              Add to Cart
            </button>
          </div>
        </Container>
      </Animated>
    </div>
  );
};

export default PageSingleProduct;
