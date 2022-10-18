import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart.cartItems);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>LOGO</Navbar.Brand>
          <Nav className="ms-auto gap-3">
            <Link to="/">Home </Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">
              <div className="ps-2 text-light">
                <FaShoppingCart />
                {cart.length}
              </div>
            </Link>
            <Link to="/counter">Counter</Link>
            <Link to="/about">About </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
