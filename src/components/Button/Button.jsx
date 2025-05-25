import './Button.css'

export default function Button({children, onClick, isActive, ...props}){
    // ...props - ... - оператор рест. В парамтры будут добавляться ве внесённые свойства
    // isActive - bool переменная, если содержит true, то классу присваивается bittonactive
    return <button {...props} className={isActive? 'button active' : 'button'} onClick={onClick}>{children}</button>
    
}