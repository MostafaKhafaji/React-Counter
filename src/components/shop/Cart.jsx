import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { decQtty, removeFromCart } from "../../redux/storeSlice";
import { HiOutlinePlusSm, HiMinus } from "react-icons/hi";
import { incQtty } from "../../redux/storeSlice";
import EmptyCart from "./EmptyCart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const [total, setTotal] = useState(0);

  //sum total
  useEffect(() => {
    let total = 0;
    cart.forEach((element) => {
      total += element.qtty * element.price;
    });
    setTotal(total);
  }, [cart]);

  const dispatch = useDispatch();
  const handleDelete = (prod) => {
    dispatch(removeFromCart(prod));
    toast.error("item has been deleted!", {
      position: "bottom-left",
      autoClose: 400,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const addPro = (product) => {
    dispatch(incQtty(product));
  };
  // const getTotal = () => {
  //   let total = 0;
  //   cart.map((item) => {
  //     return (total += item.price * item.qtty);
  //   });
  //   return Math.round(total);
  // };

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
          <h4 className="text-end">Total Price: {Math.round(total)} EGP</h4>
        </div>
      ) : (
        <EmptyCart />
      )}
      <ToastContainer
        position="bottom-left"
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

export default Cart;
