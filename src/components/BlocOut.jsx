import { useState } from "react"
import Button from "./Button/Button"
import { ButtonTest } from "../../Data/arrayTest"


export default function BlockOut(contentType) {

    const [contentType, setContentType]  = useState(null)
    
    function handleClick(arg){
      setContentType(arg)

    }

    return(

        <section>
        <h3> Блоки </h3>
        {/* isActive = true(active), если contentType == x1 */}
        <Button isActive={contentType =='Arg_1'} 
        oncClick={() => handleClick('Arg_1')}>Один</Button>

        <Button isActive={contentType =='Arg_2'} 
        oncClick={() => handleClick('Arg_2')}>Два</Button>

        <Button isActive={contentType =='Arg_3'} 
        oncClick={() => handleClick('Arg_3')}>Три</Button>

        {!contentType && <p>нажми на кнопку</p>}
        {contentType && <p>{ButtonTest[contentType]}</p>}

      </section>

    )
}

