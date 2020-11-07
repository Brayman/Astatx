import React, {useState} from 'react';

function Form(props, user) {
    const [data, setData] = useState({date:{},
    prorate: 0,
    buy: false,
    usd: 0,
    byn: 0
})
    const ProrateChange = (e) => {
        console.log();
        setData({
            ...data,
            rate: e.target.value
        })
    }
    const RateChange = (e) => {
        console.log();
        setData({
            ...data,
            prorate: e.target.value,
            increase: props.lastRate >= e.target.value ? false : true
        })
    }
    const USDChange = (e) => {
        setData({...data,
            usd: e.target.value,
            byn: Math.trunc(e.target.value * 100 * data.prorate) /100,
        })
    }
    const BuyChange = (e) => {
        if (e.target.checked===false) {
            setData({...data,buy:e.target.checked, usd:0, byn:0})
        } else {
            setData({...data,buy:e.target.checked})
        }
        
    }
    const setDate = (e) => {
        const dateNow = new Date();
        console.log(dateNow);
        setData({
            ...data,
            date: {
                default: dateNow.getDate()+'/'+ (dateNow.getMonth()+1)+'/'+dateNow.getUTCFullYear(),
                full: dateNow
            }
        })
    }
    return (
        <div className="MyForm">
            <input type="number" onChange={RateChange} onClick={setDate}/>
            <input type="number" onChange={ProrateChange} />
            <div>
                <input type="checkbox" onChange={BuyChange}/> buy?
            </div>
            <input type="number" disabled={!data.buy} value={data.usd} onChange={USDChange}/>
            
            <button onClick={()=>props.action(data, props.user.login)}>
                Отправить
            </button>
        </div>
    )
}

export default Form;