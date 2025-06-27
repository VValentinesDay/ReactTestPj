import { useCallback, useEffect, useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import useInput from "../hooks/useinput";

export default function EffectSection(){

    const [isModalOpen, setIsModalOpen] = useState(false)

    // работа с бэкэндом для асинхронного вывода
    // если работать через fetch нпрямую, то при каждом рендере
    // компонента, будет выполняться запрос и сервер может быть
    // забанен либо произойдёт рекусрия ввиду бесконечной отрисовки
    // при автогенерации компонента или чем то подобном     
    const [loading, setLoading] = useState(false);

    // работа с зданными
    const [data, setData] = useState([]);

    //использование катомного хука
    // созданный хук- объект у котрого есть ключи value и onChange 
    const input = useInput()


    // НЕкорректный вариант
    // запрос на бэк  описывается через функцию
    // async function fetchUsers(){
    //     setLoading(true)
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //     const data = await response.json()
    //     // после загрузки данных:
    //     setData(data)
    //     setLoading(false)
    // }

    // useEffect(()=> {fetchUsers()}, [])    


    // избежание рекурсии - вариант 1: разместить функцию запроса прямо в useEffet
    // более прдпечтителен - зависит от задач
    // useEffect(()=> {async function fetchUsers(){
    //     setLoading(true)
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //     const data = await response.json()
    //     // после загрузки данных:
    //     setData(data)
    //     setLoading(false)
        
    //    }
    //     fetchUsers()
    // }, [])    

    // избежание рекурсии - вариант 2:
    // использование useCallback - заносит функцию в кэш - не требует потоянного рендера
    const fetchData = useCallback(async () => {
                    setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        // после загрузки данных:
        setData(data)
        setLoading(false)
    }, [])
    // useEffcet зависит от функции, поэтому она добавляется в зависимости
    useEffect(()=>{fetchData()}, [fetchData])

    // function openModal(){
    // setIsModalOpen(true)
    // } 

    // function closeModal(){
    // setIsModalOpen(false)
    // }

    return(
        <section> 
            <h3>Effect</h3>
            <Button style={{marginBottom: '2rem'}} onClick={()=> setIsModalOpen(true)}> Открыть информацию</Button>

                <Modal open={isModalOpen}>
                    <h3>Modal from</h3>
                        <p>
                            pppppppppppppppppppppppppppppp
                            ppppppppppppppppppppppppppppppp
                            ppppppppppppppppppppppppppppp
                        </p>
                    <Button onClick={() => setIsModalOpen(false)}>Close</Button>
                </Modal>

                {loading && <p>Loading...</p>}
                {/* key - обяхательный жлемнт для работы со спискми */}
                {!loading && 
                    <>
                    {/* Для инпутов заводится стэйт, он чейндж и вэлью, но т.к. используется кастомный
                    хук включающий в себя эти ключи сюда пееносится только этот хук
                    возможен вариант value={input.value} и т.д. */}
                    <input type="text" className="contol" {...input}/>
                        <ul>
                            {data.filter(data => data.name.toLowerCase()
                            .includes(input.value.toLowerCase()))
                            .map(data => <li key={data.id}>
                                             {data.name}
                                        </li>)}
                        </ul>
                  
                    </>
                }
        
        </section>
    )
}