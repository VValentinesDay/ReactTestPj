import { useEffect, useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default function EffectSection(){

    const [isModalOpen, setIsModalOpen] = useState(false)

    function openModal(){
    setIsModalOpen(true)
    }

    return(
        <section> 
            <h3>Effect</h3>
            <Button onClick={openModal}> Открыть информацию</Button>

                        <Modal open={isModalOpen}>
                <h3>Modal from</h3>
                <p>
                    pppppppppppppppppppppppppppppp
                    ppppppppppppppppppppppppppppppp
                    ppppppppppppppppppppppppppppp
                </p>
            </Modal>
        </section>
    )
}