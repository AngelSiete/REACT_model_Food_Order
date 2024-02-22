import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Checkout(){
    const cartCtx = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)
    const cartTotal = cartCtx.items.reduce(
        (totalPrice,item) => totalPrice + item.quantity * item.price,0
    )
    const cartTotalFormated = currencyFormatter.format(cartTotal)

    function handleClose(){
        userProgressCtx.hideCheckout();
    }

    function handleSubmit(e){
        e.preventDefault();

        const fd = new FormData(e.target);
        const customerData = Object.fromEntries(fd.entries());
        fetch('http://localhost:3000/orders',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({order:{items: cartCtx.items ,customer: customerData}})
        });
    }
    return(
        <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total amount: {cartTotalFormated}</p>
                <Input label="Full Name" id="name" type="text" />
                <Input label="E-Mail" id="email" type="email" />
                <Input label="Street" id="street" type="street" />
                <Input label="Postal Code" id="postal-code" type="number" />
                <Input label="City" id="city" type="text" />
                <p className="modal-actions">
                    <Button onClick={handleClose}>Close</Button>
                    <Button>Submit</Button>
                </p>
            </form>
        </Modal>
    )
}