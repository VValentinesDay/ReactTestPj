import { useRef } from "react"
import "./Modal.css"
import {createPortal} from "react-dom"

export default function Modal({children, open}){

    const dialog = useRef()

    // если open==true
    if(open) 
        {
        dialog.current.showModal()
    }
    else
    {
        dialog.current.close()

    }



    // return(<dialog open={open}>{children}</dialog>)
    // в createPortal - первый аргумент - нужный элемент, второй элемент - место рендера
        return(createPortal(
        <dialog ref={dialog} open={open}>{children}</dialog>, 
        document.getElementById('modal')
        ))

} 