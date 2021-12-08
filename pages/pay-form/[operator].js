import { useRouter } from "next/router";
import Modal12 from '../../Components/Modal/Modal';
import { useState } from "react";
import {
  DropContainer,
  DropDownContainer,
} from "../../styles/Container.styles";
import { InputStyeles } from "../../styles/Input.styles";
import { Buttonstyeles2 } from "../../styles/Button.styeles";

import Link from "next/link";
import { useAddPaymentMutation } from "../../src/redux/paymentsApi";
import { useForm} from "react-hook-form";
import parsePhoneNumberFromString from "libphonenumber-js";

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if (!phoneNumber) {
    return value;
  }

  return phoneNumber.formatInternational();
};





function Operator() {
  const router = useRouter();
  const operatorName = router.query.operator;

  const [modalActive, setModalactive] = useState(false);

  const {
    register,
    formState: { errors},
    handleSubmit,
    reset
  } = useForm({
    mode: "onBlur",
  });
 
  const onModal = () => {
    setModalactive(true); 

  }
 

  

  const [addPayment] = useAddPaymentMutation();

  const handleAddPayment = async (data) => {
    onModal();

    await addPayment({ phone: data.phone, summ: data.summ }).unwrap();
    reset();
  };

  

 
  
  return (
    <DropContainer>
      <h1>Operator {operatorName}</h1>
      
      <DropDownContainer>
      
        <form onSubmit={handleSubmit(handleAddPayment)}>
          <label>
            
            Введите номер телефона для оплаты:
            <InputStyeles
            placeholder='+7 999 99 99'
            type='tel'
            
            {...register("phone", {
              onChange: (e) => {
                const {value} = e.target
                e.target.value = normalizePhoneNumber(value)
                console.log (e.target.value) 
              }, 
              required: "Поле обязательно для заполнения",
              maxLength: {
                value: 16,
                message: "Слишком длинный телефон",
              },
            })}
          />
        </label>
        <div style={{ height: 40, color: "red"  }}>
          {errors?.phone && <p>{errors?.phone.message || "Error"}</p>}
        </div>
          <label>
            Введите сумму:
            <InputStyeles
              type='number'
              {...register("summ", {
                max: {
                  value: 1000,
                  message: "Максимум 1000 руб.",
                },
                min: {
                  value: 1,
                  message: "Минимум 1 руб.",
                },
                required: "Поле обязательно для заполнения",
               
              })}
            />
          </label>
          <div style={{ height: 40, color: "red"  }}>
            {errors?.summ && <p>{errors?.summ.message || "Error"}</p>}
          </div>
          <label>
            Нажмите кнопку для отправки:
            <Buttonstyeles2 type="submit" >Нажать для оплаты</Buttonstyeles2>
          </label>
        </form>
        <Modal12 active={modalActive} setActive={setModalactive}/>  
      </DropDownContainer>
      <Link
        href={{
          pathname: "/",
        }}
      >
        <Buttonstyeles2 type="submit">Вернуться на главную</Buttonstyeles2>
      </Link>
      
    </DropContainer>
  );
}
export default Operator;
