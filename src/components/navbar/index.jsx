import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Header = ({ cart }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>LOGO</Navbar.Brand>
          <Nav className="ms-auto gap-3">
            <div className="ps-2 text-light">Cart {cart.length}</div>
            <Link to="/">Home </Link>
            <Link to="/shop">Shop</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/about">About </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
