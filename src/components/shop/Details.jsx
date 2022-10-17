import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    getData();
  });

  const getData = () => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  };

  return (
    <div className="d-flex my-5 align-items-center">
      <div className="w-50">
        <img className="w-50" src={product.image} alt={product.title} />
      </div>
      <div className="w-50">
        <h3>{product.title}</h3>
        <h5>{product.price} EGP</h5>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default Details;
