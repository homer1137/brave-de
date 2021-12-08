import React from "react";
import { ContainerModal, ContentModal } from "../../styles/Modal.styles";
import {Buttonstyeles} from '../../styles/Button.styeles';

   
const Modal12 = ({active, setActive}) => {
        
    const random_boolean = Math.random() >= 0.5;       
    return (
        <>
        {active ?  <ContainerModal onClick={()=>setActive (prev=>!prev)}>
            <ContentModal onClick={()=>setActive (prev=>!prev)}>
            {random_boolean ? <h2>Ваш платеж прошел успешно!</h2> : <h2>Увы, платеж не удался</h2>}    
            <div> </div>
            <Buttonstyeles onClick={()=>setActive (prev=>!prev)}>Вернуться к форме оплаты</Buttonstyeles>
            </ContentModal> 
         </ContainerModal> : null}
       
        </>
    )
};

export default Modal12;
