import './Button.css'

export default function Button({children, oncClick, isActive}){

    // isActive - bool переменная, если содержит true, то классу присваивается bittonactive
    return <button className={isActive? 'button active' : 'button'} onClick={oncClick}>{children}</button>
    
}