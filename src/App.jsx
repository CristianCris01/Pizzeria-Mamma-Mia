import { useState } from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import FormRegister from "./components/formRegister";
import FormLogin from "./components/formLogin";


function App() {
  const [currentForm, setCurrentForm] = useState(null); // null, "login" o "register"

  return (
    

    <div className="app-container">
      <alert>Hola! para revisar los nuevos componentes haz click en los botones Login y Register</alert>
    <NavBar 
      onRegisterClick={() => setCurrentForm("register")} 
      onLoginClick={() => setCurrentForm("login")}
    />
       {currentForm === "register" && <FormRegister onClose={() => setCurrentForm(null)} />}
       {currentForm === "login" && <FormLogin onClose={() => setCurrentForm(null)} />}
       {currentForm === null && <Home />}   

      <Footer />
    </div>
  );
}

export default App;