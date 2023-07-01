import React, { useContext } from "react";
import "./BestSeller.css";
import { Col, Container, Row } from "react-bootstrap";
import { MdOutlineStarRate } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Card from "react-bootstrap/Card";
import { AppContext } from "../../Components/AppContext/AppContext";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const BestSeller = () => {
  const {
    data,
    handle_popup,
    scrolltotop,
    setImg,
    handle_product,
    handle_addCart,
    sum_bill,
  } = useContext(AppContext);
  return (
    <div className="section-meals">
      <Container fluid="lg" className="text-center">
        <span className="subheading" data-aos="fade-right">
          Best Seller
        </span>
        <h2 className="heading-secondary" data-aos="fade-right">
          Three most delicious pizza voted by customers
        </h2>
      </Container>

      <Container fluid="lg">
        <Row className="gap-support ">
          {data.bestseller.map((pizza, index) => {
            return (
              <Col data-aos="zoom-in-up" md sm={5} xs={12} key={index}>
                <Card className="bestseller-card">
                  <div className="bestseller-img">
                    <Card.Img variant="top" src={pizza.img[0]} />
                    <div className="bestseller-icon">
                      <HiOutlineShoppingBag
                        title="Add to Cart"
                        className="buy-icon"
                        onClick={() => {
                          handle_addCart(pizza.id);
                          sum_bill();
                          swal({
                            title: "Successfully!",
                            text: "Your pizza has been added!",
                            icon: "success",
                            button: "Close!",
                          });
                        }}
                      />
                      <AiOutlineEye
                        title="View Product"
                        onClick={() => {
                          handle_popup(pizza.id);
                        }}
                        className="buy-icon"
                      />
                    </div>
                  </div>
                  <Link
                    className="tradi-link"
                    to="/product"
                    onClick={() => {
                      handle_product(pizza.id);
                      setImg(pizza.img[0]);
                      scrolltotop();
                    }}
                  >
                    <Card.Body className="bestseller-body">
                      <div className="meal-tags">
                        <span className="tag">Best Seller</span>
                      </div>
                      <Card.Title className="bestseller-title">
                        {pizza.name}
                      </Card.Title>
                      <Card.Text className="bestseller-text">
                        <MdOutlineStarRate className="meal-icon" />
                        <span>
                          <strong>4.9</strong> rating (537)
                        </span>
                      </Card.Text>
                      <Card.Text className="bestseller-text">
                        <MdOutlineStarRate className="meal-icon" />
                        <span>
                          <strong>4.9</strong> rating (537)
                        </span>
                      </Card.Text>
                      <Card.Text className="bestseller-text">
                        <MdOutlineStarRate className="meal-icon" />
                        <span>
                          <strong>5</strong> votes (537)
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default BestSeller;
