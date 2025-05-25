import { useState } from "react"
import "../index.css"
// import Button from "../components/Button/Button"
import Button from "./Button/Button"


export default function FeedBackSection(){
    // отдельное состояние для наличия ошибки 
    const [hasError, setHasError] = useState(false) 

    const [name, setName] = useState('') // по умолчанию, имя(начальное состояние) - пустая строчка
    // передача state в форму ввода input передаётся с помощью слова value
    const [reason, setReason] = useState('Reason_1s')

    // функция для взаимодействия с input 
    function handleNameChange(event) {
        // console.log(event.target.value)
        // дайт доступ к данным собыития
        setName(event.target.value)
        // state не меняется пока не выполнится оставшаяся часть функции, т.е. рендеринга не будет
       // неверный пример: setHasError(name.trim().length == 0 )
       // правильно
        setHasError(event.target.value.trim().length == 0 )
    }


    // работа с предыдущим остоянием
    function toggleError(){
        // setHasError(!hasError) // после вызова true (по умолчанию) изменитя на false
        // setHasError(!hasError) // однако при повотоном вызове по логике значение должно поменяться ещё раз,
        // // но этого не происходит, т.к. рендер не начинается с вызовом фукнции состояния
        // // правильный подход с использвоанием внутренней функции
        // setHasError((previos) => !previos )
        // setHasError((previos) => !previos )
        // // в таком случае значение не поменятеся
        setHasError((previos) => !previos )



    }

    return(
        <section>
            <h3>обратная связь</h3> 

            <Button onClick={toggleError}>Toggle Error</Button>
            <form>
                <label htmlFor="name">Ваше имя </label>
                 <input 
                 className="inputStyle" 
                 type="text" id="name" 
                 value={name} 
                 onChange={handleNameChange}
                //первые фигурные кобки говорят что будет динамика, вторые - что будет объект
                style={{
                    border: name.trim().length ? null : '1px solid red' // если в  длине что-то есть, тогда мы ничего не добавляем иначе ...
                    // с использованием состояния
                    // border: hasError ?  '1px solid red' : null 
               }}  />


                 <label htmlFor="reason">Причина обращения</label>
                 <select className="control" id="reason" value={reason} onChange={event => setReason(event.target.value)}>
                    <option value="Reason_1">Причина 1</option>
                    <option value="Reason_2">Причина 2</option>
                    <option value="Reason_3">Причина 3 </option>
                 </select>
                 <pre>
                    Name: {name}
                    <br/> 
                    Reason: {reason}
                 </pre>
                 <Button disabled ={hasError} isActive={!hasError}>Отправить</Button>
            </form>
        </section>
    )
}