import React, { useContext } from "react";
import "./Header.css";
import Logo from "./Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import { HiOutlineSearch } from "react-icons/hi";
import { BiShoppingBag } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AppContext } from "../../Components/AppContext/AppContext";
import Search from "./Search";
import Menu from "./Menu/Menu";
import swal from "sweetalert";
import { Animated } from "react-animated-css";
// import { Navigate } from "react-router-dom";
const Header = () => {
  const { handle_search, handle_menu, menu, cart, scrolltotop, navigate } =
    useContext(AppContext);
  // const navigateHeader = useNavigate();
  return (
    <div className="header">
      <Animated animationIn="bounceInDown" isVisible={true}>
        <div className="header-logo">
          <Link to="/" onClick={scrolltotop}>
            <img className="logo" src={Logo} alt="" />
          </Link>
          <p className="logo-name animate__fadeIn">Kha's Pizza</p>
        </div>
      </Animated>

      <Animated animationIn="bounceInDown" isVisible={true}>
        <Nav className="first-navbar">
          <Nav.Link>
            <Link className="header-nav-link" to="/" onClick={scrolltotop}>
              Home
            </Link>
          </Nav.Link>

          {/* <NavDropdown title="Menu">
            <NavDropdown.Item>
              <Link
                to="/order/tradi"
                className=" dropdown-link"
                onClick={scrolltotop}
              >
                Traditional Pizza
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                to="/order/sea"
                className=" dropdown-link"
                onClick={scrolltotop}
              >
                Seafood Pizza
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                to="/order/mixed"
                className=" dropdown-link"
                onClick={scrolltotop}
              >
                Mixed Pizza
              </Link>
            </NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link>
            <Link
              to="/order/tradi"
              onClick={scrolltotop}
              className="header-nav-link"
            >
              Menu
            </Link>
          </Nav.Link>
          <Nav.Link
            className="header-nav-link"
            href="#testimonials"
            onClick={() => navigate("/")}
          >
            Testimonials
          </Nav.Link>
          <Nav.Link
            className="header-nav-link"
            href="#location"
            onClick={() => navigate("/")}
          >
            Location
          </Nav.Link>
          <Nav.Link className="header-nav-link" href="#contact">
            Contact
          </Nav.Link>
        </Nav>
      </Animated>

      <div className="header-icon ">
        <Animated animationIn="bounceInDown" isVisible={true}>
          <HiOutlineSearch onClick={handle_search} className="icon" />
        </Animated>
        <Animated animationIn="bounceInDown" isVisible={true}>
          <FaRegUser
            className="icon"
            onClick={() => {
              swal("This feature will be available soon. Thank you!");
            }}
          />
        </Animated>
        <div className="cart">
          <Animated animationIn="bounceInDown" isVisible={true}>
            <Link to="/cart">
              <BiShoppingBag className="icon" onClick={scrolltotop} />
            </Link>
            <span className="icon-num">{cart.length}</span>
          </Animated>
        </div>
        <div className={`toggle-menu ${menu ? "active" : ""}`}>
          <Animated animationIn="bounceInDown" isVisible={true}>
            <AiOutlineMenu onClick={handle_menu} className="icon icon-toggle" />
            <AiOutlineClose onClick={handle_menu} className="icon icon-close" />
          </Animated>
        </div>
      </div>
      <Search></Search>
      <Menu></Menu>
    </div>
  );
};

export default Header;
