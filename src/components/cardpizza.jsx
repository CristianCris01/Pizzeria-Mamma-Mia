import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";







function CardPizza({ name, price, ingredients, img }) {
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
            <Button variant="outline-primary" className="me-4">Ver más 👀</Button>
            <Button variant="dark">Agregar 🛒</Button>
        </Card.Body>
        </Card>
    </div>
  );
}

export default CardPizza;