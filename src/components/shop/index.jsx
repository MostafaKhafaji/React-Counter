import React, { useEffect, useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const Shop = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  const getData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  };
  useEffect(() => {
    getData();
  }, []);

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
                  <Button onClick={() => addToCart(product)} variant="primary">
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
