import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Counter from "./components/counter/Counter";
import Header from "./components/navbar";
import About from "./components/about";
import Shop from "./components/shop";
import Home from "./components/home";
import Details from "./components/shop/Details";
function App() {
  const [cart, setCart] = useState("");

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header cart={cart} />
        <div className="container ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/shop" element={<Shop addToCart={addToCart} />} />
            <Route path="/shop/details/:id" element={<Details />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
