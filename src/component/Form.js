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

function Form(props, user) {
    const [data, setData] = useState({date:{},
    prorate: 0,
    buy: false,
    usd: 0,
    byn: 0
})
    const FormEnter = e => {
        console.log(e.target);
        switch (e.target.name) {
            case 'prorate':
                setData({
                    ...data,
                    prorate: parseFloat(e.target.value)
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
                default: dateNow.getDate()+'/'+ (dateNow.getMonth()+1)+'/'+dateNow.getUTCFullYear(),
                full: dateNow,
                month: dateNow.getMonth()+1 
            }
        })
    }
    return (
        <div className='blur'>
            <div className="form">
                <BiX className='close_button' onClick={props.close}/>
                <input type="number" name='prorate' placeholder='prorate' onChange={FormEnter} onClick={setDate}/>
                <input type="number" name='rate' placeholder='rate' onChange={FormEnter} />
                
                <div name='check' onClick={()=>{console.log('pup'); setData({...data,buy:!data.buy, usd:0, byn:0})}}>
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