import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, classes = '' }) {
    const dialog = useRef();
    useEffect(()=>{
        if (open){
            dialog.current.showModal();
        }
    }, [open])
  return createPortal(
    <dialog ref={dialog} className={`modal ${classes}`}>{children}</dialog>,
    document.getElementById("modal")
  );
}
