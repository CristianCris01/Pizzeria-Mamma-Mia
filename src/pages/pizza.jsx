import { useEffect, useState } from "react";
import CardPizza from "../components/cardpizza";
import { useParams } from "react-router-dom"; 

const getPizza = async (id) => {
  const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
  const data = await response.json();
  return data;
};

function Pizza() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    getPizza(id).then((data) => setPizza(data));
  }, [id]);

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
