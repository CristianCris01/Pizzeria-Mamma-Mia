import { useEffect, useState } from "react";
import CardPizza from "./cardpizza";

const getPizza = async () => {
  const response = await fetch ("http://localhost:5000/api/pizzas/p001");
  const data = await response.json();
  return data;
};



function Pizza() {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    getPizza().then((data) => setPizza(data));
  }, []);

  if (!pizza) {
    return null;
  }

  return (
    <div className="cards-container">
      <CardPizza {...pizza} />
    </div>
  );
}

export default Pizza;
