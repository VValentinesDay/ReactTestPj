import { useEffect, useState } from 'react';
import photo1 from '../../../public/photo1.jpg'
import './Header.module.css'
// import {testData} from '../../Data/arrayTest'
// import from '/App.css'

const nowTime = new Date();

export default function Header()
{
  let [timeState, setTime] = useState(new Date());



useEffect(() => {
  const interval = setInterval(() => setTime(new Date()), 1000)
  
  // очищение интервала для избежания утечек памяти 
  return() => {
    clearInterval(interval)
    console.log('clear')
  }
},
[]
// список зависимостей остаётся путым, так как эффект должен
// инициализироваться сразу

//ВАЖНО отметить: сколько бы компенет header не рендерился,
// useEffet не будт затрагиваться
)

  return( <header>
    <h2>
      My War
    </h2>

    <img src={photo1} alt='' />
   
    <span>Текущее время: {timeState.toLocaleTimeString()} </span>

  </header> )
}