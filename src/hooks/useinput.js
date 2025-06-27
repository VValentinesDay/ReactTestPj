import { useState } from "react";

export default function useInput(defaultValue = '')
{
    const [value, setValue] = useState(defaultValue)

    return{
        value,
        // onChange - всегда принимает в себя какой-то ивент 
        onChange: (event) => setValue(event.target.value)
    }
} 