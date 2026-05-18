import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import FormRegister from "./pages/formRegister";
import FormLogin from "./pages/formLogin";
import Cart from "./pages/cart";
import Pizza from "./pages/pizza";
import Profile from "./pages/profile";
import NotFound from "./components/notFound";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        
      
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<FormRegister />} />
          <Route path="/login" element={<FormLogin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
