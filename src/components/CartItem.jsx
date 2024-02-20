import { currencyFormatter } from "../utils/formatting"

export default function CartItem({name, qty, price, onIncrease, onDecrease}){
    const valueFormatted = currencyFormatter.format(price)
    return(
        <li className="cart-item">
            <p>{name} - {qty} - {valueFormatted}</p>
            <p className="cart-item-actions">
                <button onClick={onDecrease}>-</button>
                <span>{qty}</span>
                <button onClick={onIncrease}>+</button>
            </p>
        </li>
    )
}