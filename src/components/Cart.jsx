import { useContext } from "react";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import { currencyFormatter } from "../utils/formatting";
import UserProgressContext from "../store/UserProgressContext";
import CartContext from "../store/CartContext";
import CartItem from "./CartItem";

export default function Cart(){
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const cartTotal = cartCtx.items.reduce((totalPrice,item)=>totalPrice + item.quantity * item.price, 0)
    const totalFormatted = currencyFormatter.format(cartTotal)
    function handleCloseCart(){
        userProgressCtx.hideCart();
    }
    function handleGoToCheckout(){
        userProgressCtx.showCheckout();
    }
    return(
        <Modal classes="cart" open={userProgressCtx.progress === 'cart'} onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}>
            <h2>Cart</h2>
            <ul>
                {cartCtx.items.map((item) => 
                <CartItem key={item.id} name={item.name} qty={item.quantity} price={item.price} onIncrease={() => cartCtx.addItem(item)} onDecrease={() => cartCtx.removeItem(item.id)}/>
                )}
            </ul>
            <p className="total">{totalFormatted}</p>
            <p className="modal-actions">
                <Button onClick={handleCloseCart}>Close</Button>
                {cartCtx.items.length > 0 && <Button onClick={handleGoToCheckout}>Checkout</Button>}
            </p>
        </Modal>
    )
}