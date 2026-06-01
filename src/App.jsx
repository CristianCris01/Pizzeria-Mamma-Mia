import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import FormRegister from "./pages/formRegister";
import FormLogin from "./pages/formLogin";
import Cart from "./pages/cart";
import Pizza from "./pages/pizza";
import Profile from "./pages/profile";
import NotFound from "./components/notFound";
import { useContext } from "react";
import { UserContext } from "./context/authContext";

function App() {
  const {token} = useContext(UserContext);
  return (
    <BrowserRouter>
      <div className="app-container">
        
      
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={token ? <Navigate to="/" /> : <FormRegister/>} />
          <Route path="/login" element={token ? <Navigate to="/" /> : <FormLogin/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login"/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
