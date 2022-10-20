import React, { useEffect, useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/storeSlice";
import { BsCartPlus } from "react-icons/bs";
import CustomSpinner from "../spinner/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Shop = () => {
  const [products, setProducts] = useState([]);

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
    toast.success("Item added to cart!", {
      position: "bottom-left",
      autoClose: 400,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <div className="row my-5">
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <div className="col-md-4 col-sm-6 my-3" key={product.id}>
                <Card className="item">
                  <Link to={`/shop/details/${product.id}`}>
                    <Card.Img
                      className="w-100 p-3 custom-img"
                      variant="top"
                      src={product.image}
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title>{`${product.title.slice(
                      0,
                      30
                    )}...`}</Card.Title>
                    <Card.Text>{product.price} EGP</Card.Text>
                    <Button
                      onClick={() => handleAddToCart(product)}
                      variant="warning"
                    >
                      Add to cart <BsCartPlus />
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })
        ) : (
          <div className="position-absolute top-50 start-50 translate-middle">
            <CustomSpinner />
          </div>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={400}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Shop;
