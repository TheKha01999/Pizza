import React, { useContext } from "react";
import "./Menu.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppContext } from "../../../Components/AppContext/AppContext";

const Menu = () => {
  const { menu, scrolltotop, setMenu, navigate } = useContext(AppContext);
  return (
    <div className={`show-menu ${menu ? "active" : ""}`}>
      <Nav className="nav-box">
        <Nav.Link className="header-nav-link">
          <Link
            className="header-nav-link"
            to="/"
            onClick={() => {
              scrolltotop();
              setMenu(false);
            }}
          >
            Home
          </Link>
        </Nav.Link>
        {/* <NavDropdown title="Menu">
          <NavDropdown.Item>
            <Link
              to="/order/tradi"
              className=" dropdown-link"
              onClick={() => {
                scrolltotop();
                setMenu(false);
              }}
            >
              Traditional Pizza
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link
              to="/order/sea"
              className=" dropdown-link"
              onClick={() => {
                scrolltotop();
                setMenu(false);
              }}
            >
              Seafood Pizza
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link
              to="/order/mixed"
              className=" dropdown-link"
              onClick={() => {
                scrolltotop();
                setMenu(false);
              }}
            >
              Mixed Pizza
            </Link>
          </NavDropdown.Item>
        </NavDropdown> */}
        <Nav.Link>
          <Link
            to="/order/tradi"
            onClick={() => {
              scrolltotop();
              setMenu(false);
            }}
            className="header-nav-link"
          >
            Menu
          </Link>
        </Nav.Link>
        <Nav.Link
          className="header-nav-link"
          href="#testimonials"
          onClick={() => {
            setMenu(false);
            navigate("/");
          }}
        >
          Testimonials
        </Nav.Link>
        <Nav.Link
          className="header-nav-link"
          href="#location"
          onClick={() => {
            setMenu(false);
            navigate("/");
          }}
        >
          Location
        </Nav.Link>
        <Nav.Link
          className="header-nav-link"
          href="#contact"
          onClick={() => {
            setMenu(false);
          }}
        >
          Contact
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Menu;
