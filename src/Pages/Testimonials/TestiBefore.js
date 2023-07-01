import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import "./Testimonials.css";
import { Col, Container, Row, Card } from "react-bootstrap";
import jennie from "./imgs/jennie.jpg";
import nancy from "./imgs/nancy.jpg";
import jisoo from "./imgs/jisoo.jpg";
import lisa from "./imgs/lisa.jpg";
import rose from "./imgs/rose.jpg";
import messi from "./imgs/messi.jpg";
import ronaldo from "./imgs/ronaldo.jpg";
import nezuko from "./imgs/nezuko.jpg";
import ozawa from "./imgs/ozawa.jpg";
import fukada from "./imgs/eimi fukada.jpg";

const TestiBefore = () => {
  return (
    <div className="section-testimonials" id="testimonials">
      <Container fluid="lg">
        <span className="subheading" data-aos="fade-right">
          Testimonials
        </span>
        <h2 className="heading-secondary" data-aos="fade-right">
          Once you try, You'll never forget
        </h2>
      </Container>
      <Container fluid="lg">
        <Swiper
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="testimonials-swiper"
        >
          <SwiperSlide>
            <Row>
              <Col>
                <Card className="testimonials-card card-left">
                  <div className="testimonials-head">
                    <Card.Img
                      className="testimonials-img"
                      variant="top"
                      src={jennie}
                    />
                  </div>
                  <Card.Title className="testimonials-title">
                    Jennnie Kim
                  </Card.Title>
                  <Card.Body className="testimonials-body">
                    <Card.Text className="testimonials-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="testimonials-card card-right">
                  <div className="testimonials-head">
                    <Card.Img
                      className="testimonials-img"
                      variant="top"
                      src={jisoo}
                    />
                  </div>
                  <Card.Title className="testimonials-title">
                    Kim Ji-soo
                  </Card.Title>
                  <Card.Body className="testimonials-body">
                    <Card.Text className="testimonials-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide>
            <Row>
              <Col>
                <Card className="testimonials-card card-left">
                  <div className="testimonials-head">
                    <Card.Img
                      className="testimonials-img"
                      variant="top"
                      src={lisa}
                    />
                  </div>
                  <Card.Title className="testimonials-title">
                    Lalisa Manobal
                  </Card.Title>
                  <Card.Body className="testimonials-body">
                    <Card.Text className="testimonials-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="testimonials-card card-right">
                  <div className="testimonials-head">
                    <Card.Img
                      className="testimonials-img"
                      variant="top"
                      src={rose}
                    />
                  </div>
                  <Card.Title className="testimonials-title">
                    Roseanne Park
                  </Card.Title>
                  <Card.Body className="testimonials-body">
                    <Card.Text className="testimonials-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide>
            <Row>
              <Col>
                <Card className="testimonials-card card-left">
                  <div className="testimonials-head">
                    <Card.Img
                      className="testimonials-img"
                      variant="top"
                      src={nancy}
                    />
                  </div>
                  <Card.Title className="testimonials-title">
                    Nancy Jewel McDonie
                  </Card.Title>
                  <Card.Body className="testimonials-body">
                    <Card.Text className="testimonials-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="testimonials-card card-right">
                  <div className="testimonials-head">
                    <Card.Img
                      className="testimonials-img"
                      variant="top"
                      src={nezuko}
                    />
                  </div>
                  <Card.Title className="testimonials-title">
                    Nezuko Kamado
                  </Card.Title>
                  <Card.Body className="testimonials-body">
                    <Card.Text className="testimonials-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide>
            <Row>
              <Col>
                <Card className="testimonials-card card-left">
                  <div className="testimonials-head">
                    <Card.Img
                      className="testimonials-img"
                      variant="top"
                      src={fukada}
                    />
                  </div>
                  <Card.Title className="testimonials-title">
                    Fukada Eimi
                  </Card.Title>
                  <Card.Body className="testimonials-body">
                    <Card.Text className="testimonials-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="testimonials-card card-right">
                  <div className="testimonials-head">
                    <Card.Img
                      className="testimonials-img"
                      variant="top"
                      src={ozawa}
                    />
                  </div>
                  <Card.Title className="testimonials-title">
                    Ozawa Maria
                  </Card.Title>
                  <Card.Body className="testimonials-body">
                    <Card.Text className="testimonials-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide>
            <Row>
              <Col>
                <Card className="testimonials-card card-left">
                  <div className="testimonials-head">
                    <Card.Img
                      className="testimonials-img"
                      variant="top"
                      src={ronaldo}
                    />
                  </div>
                  <Card.Title className="testimonials-title">
                    Cristiano Ronaldo
                  </Card.Title>
                  <Card.Body className="testimonials-body">
                    <Card.Text className="testimonials-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="testimonials-card card-right">
                  <div className="testimonials-head">
                    <Card.Img
                      className="testimonials-img"
                      variant="top"
                      src={messi}
                    />
                  </div>
                  <Card.Title className="testimonials-title">
                    Leo Messi
                  </Card.Title>
                  <Card.Body className="testimonials-body">
                    <Card.Text className="testimonials-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default TestiBefore;
