import { toInteger } from 'lodash';
import React, {useState} from 'react';
import '../css/form.css';
import { BiCheckbox, BiCheckboxChecked, BiX } from "react-icons/bi";

function CheckBox({checked}) {
    console.log(checked);
    const [checkee, setCheck] = useState(false)
    return (
        <div className='checkbox'>
            {checked ? <BiCheckboxChecked name='check' className='checkbox checked'/>: <BiCheckbox className='checkbox default'/>}
        </div>
    )
}

function Form(props, user, lastRate) {
    const [data, setData] = useState({
    date:{},
    prorate: 0,
    buy: false,
    usd: 0,
    byn: 0,
    helper: {
        status: null,
        text: null
    }
})
    const FormEnter = e => {
        console.log(data.prorate > props.lastRate);
        
        switch (e.target.name) {
            case 'prorate':
                lastRate > data.prorate ? setData({...data.helper, helper:{status: 'bad', text: 'bad day to buy USD'}}) : setData({...data.helper,helper: {status: 'good', text: 'good day to buy USD'}})
                setData({
                    ...data,
                    prorate: parseFloat(e.target.value),
                    increase: e.target.value >= props.lastRate
                })
                
                break;
            case 'rate':
                setData({
                    ...data,
                    rate: parseFloat(e.target.value)
                })
                break;
            case 'check':
                setData({...data,buy:!data.buy, usd:0, byn:0})
                
                break;
            case 'usd':
                setData({
                    ...data,
                    usd: parseInt(e.target.value),
                    byn: Math.trunc(e.target.value * 100 * data.prorate) /100
                })
            default:
                break;
        }
    }

    const setDate = (e) => {
        const dateNow = new Date();
        console.log(dateNow);
        setData({
            ...data,
            date: {
                default: dateNow.toDateString(),
                full: dateNow.getTime(),
                month: dateNow.toLocaleString('ru-ru',{month: 'long'})
            }
        })
    }
    return (
        <div className='blur'>
            <div className="form">
                <BiX className='close_button' onClick={props.close}/>
                <input type="number" name='prorate' placeholder='prorate' onChange={FormEnter} onClick={setDate}/>
                <input type="number" name='rate' placeholder='rate' onChange={FormEnter} />
                <div className={data.helper.status +' help'}>{data.helper.text}</div>
                <div name='check' onClick={()=>{setData({...data,buy:!data.buy, usd:0, byn:0})}}>
                    Купленно? <CheckBox checked={data.buy} /> 
                    
                </div>
                <input type="number" name='usd' disabled={!data.buy} onChange={FormEnter}/>
                
                <button onClick={()=>props.addStat(data, props.user.login)}>
                    Отправить
                </button>
            </div>
        </div>
    )
}

export default Form;