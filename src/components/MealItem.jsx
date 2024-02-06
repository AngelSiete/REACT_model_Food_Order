import { useContext } from "react";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);
  function handleAddMealToCart(){
    cartCtx.addItem(meal)
  }
  const formattedPrice = currencyFormatter.format(meal.price);
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt="xxx" />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{formattedPrice}</p>
          <p className="meal-item-desc">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add 2 Cart</Button>
        </p>
      </article>
    </li>
  );
}
