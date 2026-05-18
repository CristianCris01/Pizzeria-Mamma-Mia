import { useEffect, useState } from "react";
import Header from "../components/header";
import CardPizza from "../components/cardpizza";
import Pizza from "./pizza";



const getPizzas = async () => {
  const response = await fetch ("http://localhost:5000/api/pizzas");
  const data = await response.json();
  return data;
};

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    getPizzas().then((data) => setPizzas(data));
  }, []);

  return (
    <div>
      <Header />
      <Pizza />
      <div className="cards-container">
        {pizzas.map((pizza, index) => (
          <CardPizza key={index} {...pizza} />
        ))}
      </div>
    </div>
  );
}

export default Home;









