import logo from "./logo.svg";
import "./App.css";
import ProductPage from "./component/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./component/ProductDetails";
import Navbar from "./component/Navbar";
import SignUp from "./component/SignUp";
import SignIn from "./component/SignIn";
import AdminPage from "./component/AdminPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/usersignin" element={<SignIn />} />
          <Route path="/usersignup" element={<SignUp />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
