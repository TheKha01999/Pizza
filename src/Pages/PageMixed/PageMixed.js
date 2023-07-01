import React, { useContext } from "react";
import "./PageMixed.css";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { AiOutlineEye } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineStarRate } from "react-icons/md";
import { AppContext } from "../../Components/AppContext/AppContext";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { Animated } from "react-animated-css";
const PageMixed = () => {
  const {
    dataMixed,
    handle_popup,
    handle_sort,
    isLayout,
    handle_addCart,
    handle_product,
    setImg,
    scrolltotop,
  } = useContext(AppContext);
  return (
    <Container
      fluid="lg"
      className={`${isLayout ? "page-tradi active" : "page-tradi"} `}
    >
      {dataMixed &&
        handle_sort(dataMixed).map((pizza, index) => {
          return (
            <Animated animationIn="jello" isVisible={true}>
              <Card key={index} className="tradi-card">
                <div className="tradi-img">
                  <Card.Img variant="top" src={pizza.img[0]} />
                  <div className="tradi-icon-box">
                    <HiOutlineShoppingBag
                      className="tradi-buy-icon"
                      onClick={() => {
                        handle_addCart(pizza.id);
                        swal({
                          title: "Successfully!",
                          text: "Your pizza has been added!",
                          icon: "success",
                          button: "Close!",
                        });
                      }}
                    />
                    <AiOutlineEye
                      className="tradi-buy-icon"
                      onClick={() => handle_popup(pizza.id)}
                    />
                  </div>
                </div>
                <Link
                  onClick={() => {
                    handle_product(pizza.id);
                    setImg(pizza.img[0]);
                    scrolltotop();
                  }}
                  className="tradi-link"
                  to="/product"
                >
                  <Card.Body className="tradi-body">
                    <div>
                      <MdOutlineStarRate className="tradi-start-icon" />
                      <MdOutlineStarRate className="tradi-start-icon" />
                      <MdOutlineStarRate className="tradi-start-icon" />
                      <MdOutlineStarRate className="tradi-start-icon" />
                      <MdOutlineStarRate className="tradi-start-icon" />
                    </div>
                    <Card.Title className="tradi-title">
                      {pizza.name}
                    </Card.Title>
                    <Card.Text className="tradi-description">
                      {pizza.description}
                    </Card.Text>
                    <Card.Text className="tradi-text">
                      {pizza.prices} <span>$</span>
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Animated>
          );
        })}
    </Container>
  );
};

export default PageMixed;
