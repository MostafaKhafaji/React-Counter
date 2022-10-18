import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Counter from "./components/counter/Counter";
import Header from "./components/navbar";
import About from "./components/about";
import Shop from "./components/shop";
import Home from "./components/home";
import Details from "./components/shop/Details";
import Cart from "./components/shop/Cart";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/details/:id" element={<Details />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
