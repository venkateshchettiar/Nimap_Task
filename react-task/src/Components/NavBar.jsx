import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "../App.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cart = useSelector((state) => state.AddData.counter);
  return (
    <div className="main">
      <Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav_bar">
              All Products
            </Link>
            <Link to="/featured" className="nav_bar">
              Featured Products
            </Link>
          </Nav>
          <Nav>
            <ShoppingCartIcon style={{ fontSize: "25px", marginTop: "4px" }} />
            <span style={{ fontSize: "20px", color: "black" }}>{cart}</span>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
