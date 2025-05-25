import { useState } from 'react';
import photo1 from '../../../public/photo1.jpg'
import './Header.module.css'
// import {testData} from '../../Data/arrayTest'
// import from '/App.css'

const nowTime = new Date();

export default function Header()
{
  let [timeState, setTime] = useState(new Date());
   setInterval(() => setTime(new Date()), 1000)

  return( <header>
    <h2>
      My War
    </h2>

    <img src={photo1} alt='' />
   
    <span>Текущее время: {timeState.toLocaleTimeString()} </span>

  </header> )
}