import { createContext, startTransition, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (itemId) => {},
  totalPrice: 0,
});

function cartReducer(state, action) {
  if (action.type === "add_item") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];
    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }
  if (action.type === "remove_item") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const updatedItems = [...state.items];
    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      if (existingItem.quantity > 1) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      }else{
        const updatedItems = [...state.items];
        updatedItems.splice(existingCartItemIndex,1)
      }
    } else {
      return;
    }
    return { ...state, items: updatedItems };
  }
  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });
  function addItem(item){
    dispatchCartAction({type:'add_item', item: item})
  }
  function removeItem(id){
    dispatchCartAction({type:'remove_item', id})
  }
  const cartContext = {
    items: cart.items,
    addItem: addItem,
    removeItem: removeItem
  }
  return <CartContextProvider value={cartContext}>{children}</CartContextProvider>;
}

export default CartContext;
