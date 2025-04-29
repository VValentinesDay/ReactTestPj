import { testData } from '../../Data/arrayTest';
import { ListElement } from './ListElement';


export default function ArrayOut(){

    return(  <section>
              <h2> Вывод массива: </h2>
            
            <ul>
              {/* {testData.map((el) => (<ListElement {... el}/>))} */}
              {/* Тоже самое можн записать как... И здесь и в примере выше, необходимо добавлять параметр key, 
              который позволит реакту парвильно функционировать */}
              {testData.map((el) => {return <ListElement key={el.title} {... el} />})}

            </ul>
            </section>)
}