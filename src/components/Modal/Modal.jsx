import { useRef, useEffect } from "react"
import "./Modal.css"
import {createPortal} from "react-dom"

export default function Modal({children, open}){

    const dialog = useRef()
    // useEffet используется исключительно в компонентах либо в кастомных хуках
    // он ничего не возвращает, принимает в себя два параметра: 
    // 1 параметр: кол бэк () => {} - функция, которая выполняется 
    // 2 параметр: массив зависимотей - от чего зависит эффект
    //
    //useEffect - сначала регистрирует функцию и массив зависимостей,\
    //после чего ждёт окончания рендера и запукает функцию по зависимостям
    useEffect(() => {
        // если open==true
            if(open) 
                {
                dialog.current.showModal()
            }
            else
            {
                dialog.current.close()

            }
    }, [open] )
   



    // return(<dialog open={open}>{children}</dialog>)
    // в createPortal - первый аргумент - нужный элемент, второй элемент - место рендера
        return(createPortal(
        <dialog ref={dialog} >{children}</dialog>, 
        document.getElementById('modal')
        ))

} 