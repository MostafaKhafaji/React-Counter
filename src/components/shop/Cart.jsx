import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { removeFromCart } from "../../redux/storeSlice";
const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();
  const handleDelete = (prod) => {
    dispatch(removeFromCart(prod));
  };
  const getTotal = () => {
    let total = 0;
    cart.map((item) => {
      return (total += item.price * item.qtty);
    });
    return total;
  };
  return (
    <>
      <Table striped bordered hover className="my-5">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Product price</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => {
            return (
              <tr>
                <td>{product.title}</td>
                <td className="cart-img">
                  <img src={product.image} alt="" />
                </td>
                <td>{product.price}</td>
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
    </>
  );
};

export default Cart;
