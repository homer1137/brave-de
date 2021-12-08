import {useGetPaymentsQuery} from '../../src/redux/paymentsApi';
import { useState } from 'react';



export default function Payments() {
    const[count, setCount] = useState('');
    const {data=[], isLoading} = useGetPaymentsQuery(count);


    if (isLoading) return <h1>Идет загрузка! Ждите!</h1>

    return (
        <div>
        <div>
        <select value={count} onChange={(e)=>setCount(e.target.value)}>
            <option value ="">Все</option>
            <option value ="1">1</option>
            <option value ="2">2</option>
            <option value ="3">3</option>
                   
        </select>
        </div>
            <ul>
                {data.map(item =>
                (
                    <li key={item.id}>
                    <h2>{item.id}. На данный телефон {item.phone} поступила оплата в размере: {item.summ} руб.</h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}
