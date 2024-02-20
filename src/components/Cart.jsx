import { useContext } from "react";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import { currencyFormatter } from "../utils/formatting";
import UserProgressContext from "../store/UserProgressContext";
import CartContext from "../store/CartContext";



export default function Cart(){
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const cartTotal = cartCtx.items.reduce((totalPrice,item)=>totalPrice + item.quantity * item.price, 0)
    const totalFormatted = currencyFormatter.format(cartTotal)
    function handleCloseCart(){
        userProgressCtx.hideCart();
    }
    return(
        <Modal classes="cart" open={userProgressCtx.progress === 'cart'}>
            <h2>Cart</h2>
            <ul>
                {cartCtx.items.map((item) => 
                <li key={item.id}>{item.name} - {item.quantity}</li>
                )}
            </ul>
            <p className="total">{totalFormatted}</p>
            <p className="modal-actions">
                <Button onClick={handleCloseCart}>Close</Button>
                <Button onClick={handleCloseCart}>Checkout</Button>
            </p>
        </Modal>
    )
}