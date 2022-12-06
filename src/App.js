import logo from "./logo.svg";
import "./App.css";
import ProductPage from "./component/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./component/ProductDetails";
import Navbar from "./component/Navbar";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
