import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { decQtty, removeFromCart } from "../../redux/storeSlice";
import { HiOutlinePlusSm, HiMinus } from "react-icons/hi";
import { incQtty } from "../../redux/storeSlice";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();
  const handleDelete = (prod) => {
    dispatch(removeFromCart(prod));
  };
  const addPro = (product) => {
    dispatch(incQtty(product));
  };
  const getTotal = () => {
    let total = 0;
    cart.map((item) => {
      return (total += item.price * item.qtty);
    });
    return Math.round(total);
  };

  const removePro = (product) => {
    dispatch(decQtty(product));
  };
  return (
    <>
      {cart.length > 0 ? (
        <div>
          <Table striped bordered hover className="my-5">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Image</th>
                <th>Product price</th>
                <th>Qtty</th>
                <th> Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.title.slice(0, 40)}...</td>
                    <td className="cart-img">
                      <img src={product.image} alt="" />
                    </td>
                    <td>{product.price}</td>
                    <td>
                      <HiOutlinePlusSm onClick={() => addPro(product)} />{" "}
                      {product.qtty}{" "}
                      <HiMinus onClick={() => removePro(product)} />
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(product)}
                        className="btn btn-danger"
                      >
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <h4 className="text-end">Total Price: {getTotal()} EGP</h4>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
