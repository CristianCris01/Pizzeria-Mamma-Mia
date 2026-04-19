import Header from "./header";
import CardPizza from "./cardpizza";

const pizzas = [
  {
    name: "Napolitana",
    price: 5950,
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    img: "https://plus.unsplash.com/premium_photo-1733266807710-f8f8de34416f?q=80&w=1170&auto=format&fit=crop",
  },
  {
    name: "Española",
    price: 6950,
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    img: "https://plus.unsplash.com/premium_photo-1667682942148-a0c98d1d70db?q=80&w=1170&auto=format&fit=crop",
  },
  {
    name: "Pepperoni",
    price: 6950,
    ingredients: ["mozzarella", "pepperoni", "orégano","parmesano"],
    img: "https://images.unsplash.com/photo-1564128442383-9201fcc740eb?q=80&w=1231&auto=format&fit=crop",
  },
];

function Home() {
  return (
    <div>
      <Header />
      <div className="cards-container">
        {pizzas.map((pizza, index) => (
          <CardPizza key={index} {...pizza} />
        ))}
      </div>
    </div>
  );
}

export default Home;


