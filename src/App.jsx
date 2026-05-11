import { useState } from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import FormRegister from "./components/formRegister";
import FormLogin from "./components/formLogin";
import Cart from "./components/cart";


function App() {
  const [currentView, setCurrentView] = useState(null); // null, "login", "register" o "cart"

  return (
    

    <div className="app-container">
      <alert>Hola! para revisar el Hito 3 por favor hacer click en el boton del carrito de compras.
        Para revisar el Hito 4, por favor revisar el home donde se muestra una pizza desde la API y las otras 6 de la misma API.
      </alert>
    <NavBar 
      onHomeClick={() => setCurrentView(null)}
      onRegisterClick={() => setCurrentView("register")} 
      onLoginClick={() => setCurrentView("login")}
      onCartClick={() => setCurrentView("cart")}
    />
       {currentView === "register" && <FormRegister onClose={() => setCurrentView(null)} />}
       {currentView === "login" && <FormLogin onClose={() => setCurrentView(null)} />}
       {currentView === "cart" && <Cart />}
       {currentView === null && <Home />}   

      <Footer />
    </div>
  );
}

export default App;
