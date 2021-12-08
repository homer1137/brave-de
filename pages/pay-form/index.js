import {
  DropContainer,
  DropDownContainer,
} from "../../styles/Container.styles";
import { Buttonstyeles } from "../../styles/Button.styeles";
import { useState } from "react";
import Link from "next/link";
import { useAddPaymentMutation } from "../../src/redux/paymentsApi";

export default function PayForm({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const operators = ["MTC", "Билайн", "Мегафон"];
  const [] = useAddPaymentMutation();

  return (
    <DropContainer>
      <h1>Выберите мобильного оператора для оплаты</h1>
    
      <DropDownContainer>
        <Buttonstyeles onClick={(e) => setIsActive(!isActive)}>
          {selected}
          <span>Список мобильных оперторов (нажми для отображения)</span>
        </Buttonstyeles>
        {isActive && (
          <div>
            {operators.map((operator) => (
              <Buttonstyeles
                key={operator}
                onClick={(e) => {
                  setSelected(operator);
                  setIsActive(false);
                }}
              >
                <Link
                  href={{
                    pathname: "/pay-form/[operator]",
                    query: { operator: operator },
                  }}
                >
                  <h2>{operator} оператор сотовой связи</h2>
                </Link>
              </Buttonstyeles>
            ))}
          </div>
        )}
        </DropDownContainer>
    </DropContainer>
  );
}
