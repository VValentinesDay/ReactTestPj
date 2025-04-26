import './App.css'
import Header from './components/Header'
import { ListElement } from './components/ListElement';
import Button from './components/Button/Button';
import { useState } from 'react';
import { ButtonTest, testData } from '../Data/arrayTest';

export default function App() {

  // ХУК и прилагаемая функция - в комплекте
const [contentType, setContentType]  = useState(null)

function handleClick(arg){
  // console.log('button clicked', arg)
  setContentType(arg)
  // content = arg
}


//   let tabContent = null
//   // если в contetnType что либо есть
// if(contentType) {
//   tabContent = <p>{testData[contentType]}</p>
// } else
// {
//   tabContent = <p>Резерв</p>
// }





  return (
    <div>
     <Header/>

      <main>
        <section>
          <h2> Наш подход: </h2>
        
        <ul>
          {/* {testData.map((el) => (<ListElement {... el}/>))} */}
          
          {/* Тоже самое можн записать как... И здесь и в примере выше, необходимо добавлять параметр key, 
          который позволит реакту парвильно функционировать */}
          {testData.map((el) => {return <ListElement key={el.title} {... el} />})}
        
        {/* <ListElement title="111" desc="000"></ListElement>
        <ListElement title="222" desc="1111"></ListElement>
        <ListElement title="333" desc="1111"></ListElement>
        <ListElement title="444" desc="1111"></ListElement> */}

        {/* <ListElement {... testData[0]}></ListElement>
        <ListElement {... testData[1]}></ListElement>
        <ListElement {... testData[2]}></ListElement>
        <ListElement {... testData[3]}></ListElement> */}
        </ul>
        </section>
        <section>
          <h3> блоки </h3>
          {/* isActive = true(active), если contentType == x1 */}
          <Button isActive={contentType =='Arg_1'} 
          oncClick={() => handleClick('Arg_1')}>Один</Button>

          <Button isActive={contentType =='Arg_2'} 
          oncClick={() => handleClick('Arg_2')}>Два</Button>

          <Button isActive={contentType =='Arg_3'} 
          oncClick={() => handleClick('Arg_3')}>Три</Button>

          {/* 1. Тернарное выражение: если объект что-то содержить, то вывести X1 , в противном случае X2 */}
          {/* {contentType ? <p>{testData[contentType]}</p> : <div>Нажать на кнопку</div>} */}
          {/* 2. Также возможно */}
          {/* {!contentType ? <p>нажми на кнопку</p> : null }
          {contentType ? <p>{testData[contentType]}</p> : null } */}
          {/* 3. Если ContenType пуст - присвоить - нажать на кнопку */}
          {!contentType && <p>нажми на кнопку</p>}
          {/* Если ContentType что-то содержит, то вывести содержимое в переменную ХУКА */}
          {contentType && <p>{ButtonTest[contentType]}</p>}
          {/* 4.  tabContent - см выше*/}
          {/* {tabContent} */}
        </section>
        <section><strong>TEST</strong>
        {testData["Arg_1"]}
        </section>
      <h1>Hello</h1>
      </main>
    </div>
  )
}

