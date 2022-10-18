import React, { useEffect, useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/storeSlice";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.cart.cartItems);

  const getData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  };
  useEffect(() => {
    getData();
  }, []);

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  console.log(cart);
  return (
    <>
      <div className="row my-5">
        {products.map((product) => {
          return (
            <div className="col-md-4 col-sm-6 my-3" key={product.id}>
              <Card className="item">
                <Link to={`/shop/details/${product.id}`}>
                  <Card.Img
                    className="w-100 custom-img"
                    variant="top"
                    src={product.image}
                  />
                </Link>
                <Card.Body>
                  <Card.Title>{`${product.title.slice(0, 30)}...`}</Card.Title>
                  <Card.Text>{product.price} EGP</Card.Text>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    variant="primary"
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shop;
