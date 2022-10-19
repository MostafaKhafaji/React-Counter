import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart.cartCounter);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>LOGO</Navbar.Brand>
          <Nav className="ms-auto gap-3">
            <NavLink to="/" end={true}>
              Home
            </NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/cart">
              <div className="ps-2 text-light position-relative">
                <FaShoppingCart />
                <span className="cart-num position-absolute">{cart}</span>
              </div>
            </NavLink>
            <NavLink to="/counter">Counter</NavLink>
            <NavLink to="/about">About </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
