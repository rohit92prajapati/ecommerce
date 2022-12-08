import logo from "./logo.svg";
import "./App.css";
import ProductPage from "./component/ProductPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/usersignin" element={<SignIn />} />
          <Route path="/usersignup" element={<SignUp />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<Navigate to="/usersignin" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
