import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { GlobalContext } from "../context/context";
import { Link } from "react-router-dom";


function CardPizza({ id, name, price, ingredients, img }) {
  const { addToCart } = useContext(GlobalContext);

  const pizza = {
    id,
    name,
    price,
    ingredients,
    img,
  };

  return (
    <div id="card-pizza-edit">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Precio: ${price}</Card.Text>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <Link to={`/pizza/${id}`}>
            <Button variant="outline-primary" className="me-4">
              Ver mas
            </Button>
          </Link>

          <Button variant="dark" onClick={() => addToCart(pizza)}>
            Agregar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardPizza;
