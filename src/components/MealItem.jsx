import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";

export default function MealItem({ meal }) {
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
          <Button>Add 2 Cart</Button>
        </p>
      </article>
    </li>
  );
}
