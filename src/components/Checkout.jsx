import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/formatting";

export default function Checkout(){
    const cartCtx = useContext(CartContext)
    const cartTotal = cartCtx.items.reduce(
        (totalPrice,item) => totalPrice + item.quantity * item.price,0
    )
    const cartTotalFormated = currencyFormatter.format(cartTotal)
    return(
        <Modal>
            <form action="">
                <h2>Checkout</h2>
                <p>Total amount: {cartTotalFormated}</p>
            </form>
        </Modal>
    )
}