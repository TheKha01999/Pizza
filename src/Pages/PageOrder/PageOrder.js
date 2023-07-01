import React, { useContext } from "react";
import "./PageOrder.css";
import { AiOutlineHome } from "react-icons/ai";
import { Container } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import pic1 from "./img/1.jpg";
import pic2 from "./img/2.jpg";
import pic3 from "./img/3.jpg";
import pic4 from "./img/4.jpg";
import pic5 from "./img/5.jpg";
import pic6 from "./img/6.jpg";
import pic7 from "./img/7.jpg";
import pic8 from "./img/8.jpg";
import pic9 from "./img/9.jpg";
import pic10 from "./img/10.jpg";
import pic11 from "./img/11.jpg";
import pic12 from "./img/12.jpg";
import pic13 from "./img/13.jpg";
import pic14 from "./img/14.jpg";
import pic15 from "./img/15.jpg";
import pic16 from "./img/16.jpg";
import pic17 from "./img/17.jpg";
import pic18 from "./img/18.jpg";
import pic19 from "./img/19.jpg";
import pic20 from "./img/20.jpg";
import pic21 from "./img/21.jpg";
import pic22 from "./img/22.jpg";
import pic23 from "./img/23.jpg";
import pic24 from "./img/24.jpg";
import { FiFilter } from "react-icons/fi";
// import { LuLayoutList, LuLayoutGrid } from "react-icons/lu";
import { BsGrid1X2, BsListUl } from "react-icons/bs";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { AppContext } from "../../Components/AppContext/AppContext";
import { Animated } from "react-animated-css";
const PageOrder = () => {
  const { setCheck, setIsLayout } = useContext(AppContext);

  return (
    <div className="page-products">
      <Container fluid="lg">
        <Animated
          animationIn="bounceInLeft"
          isVisible={true}
          animationInDelay={500}
        >
          <div className="head-page" id="menu">
            <Link className="head-icon" to="/">
              <AiOutlineHome />
            </Link>
            <p className="head-separate">|</p>
            <p className="head-name">Menu</p>
          </div>
        </Animated>
      </Container>
      <Container fluid="lg">
        <Animated animationIn="shake" isVisible={true} animationInDelay={500}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="page-Swiper"
          >
            <SwiperSlide className="grid-4-col">
              <div className="gallery-item">
                <img src={pic1} alt="" />
              </div>
              <div className="gallery-item">
                <img src={pic2} alt="" />
              </div>
              <div className="gallery-item">
                <img src={pic3} alt="" />
              </div>
              <div className="gallery-item">
                <img src={pic4} alt="" />
              </div>
              <div className="gallery-item">
                <img src={pic5} alt="" />
              </div>
              <div className="gallery-item">
                <img src={pic24} alt="" />
              </div>
              <div className="gallery-item">
                <img src={pic7} alt="" />
              </div>
              <div className="gallery-item">
                <img src={pic8} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="grid-4-col">
              <div className="gallery-item">
                <img src={pic9} alt="" />
              </div>
              <div className="gallery-item">
                <img src={pic10} alt="" />
              </div>
              <div className="gallery-item">
                <img src={pic11} alt="" />
              </div>
              <div className="gallery-item">
                <img src={pic12} alt="" />
              </div>
              <div className="gallery-item">
                <img src={pic13} alt="" />
              </div>
              <div className="gallery-item">
                <img src={pic14} alt="" />
              </div>
              <div className="gallery-item">
                <img src={pic15} alt="" />
              </div>
              <div className="gallery-item">
                <img src={pic16} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="grid-4-col">
              <div className="gallery-item">
                <img src={pic17} alt="" />
              </div>
              <div className="gallery-item">
                <img src={pic18} alt="" />
              </div>
              <div className="gallery-item">
                <img src={pic19} alt="" />
              </div>
              <div className="gallery-item">
                <img src={pic20} alt="" />
              </div>
              <div className="gallery-item">
                <img src={pic21} alt="" />
              </div>
              <div className="gallery-item">
                <img src={pic22} alt="" />
              </div>
              <div className="gallery-item">
                <img src={pic23} alt="" />
              </div>
              <div className="gallery-item">
                <img src={pic6} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </Animated>
      </Container>
      <Container fluid="lg">
        <div className="selection-bar">
          <div className="filter-bar">
            <FiFilter />
            <Form.Select
              aria-label="Sorted By:"
              onChange={(e) => {
                e.preventDefault();
                setCheck(e.target.value);
              }}
            >
              <option>Sorted By:</option>
              <option value="5">Default</option>
              <option value="1">A-Z</option>
              <option value="2">Z-A</option>
              <option value="3">Prices ⬆</option>
              <option value="4">Prices ⬇</option>
            </Form.Select>
          </div>
          <div className="button-bar">
            <Link to="/order/tradi">Traditional Pizza</Link>
            <Link to="/order/sea">Seafood Pizza</Link>
            <Link to="/order/mixed">Mixed Pizza</Link>
          </div>
          <div className="layout-bar">
            <BsGrid1X2 onClick={() => setIsLayout(false)} />
            <BsListUl onClick={() => setIsLayout(true)} />
          </div>
        </div>
      </Container>
      <Outlet></Outlet>
    </div>
  );
};

export default PageOrder;
