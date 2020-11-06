import React from "react";
import { MdTrendingUp, MdTrendingDown, MdMoneyOff, MdAttachMoney } from "react-icons/md";
import { BiMessageSquareCheck, BiMessageSquareX } from "react-icons/bi";



function Table({data}) {
    var sum = {usd: 0, byn: 0, price: 0, srusd: 0};
    data.map((arr, i) => {
        if(arr.buy === true) {
            
            sum.usd = sum.usd + arr.usd
            sum.byn = sum.byn + arr.byn
            sum.price = sum.usd * data[data.length-1].prorate
            sum.srusd = sum.usd / data.length
            
        }
    })
    const SimpleDate = (update) => {
        const date = new Date(update);
        const parseDate = date.getDate()+'/'+ (date.getMonth()+1)+'/'+date.getUTCFullYear();
        return parseDate;
    }
    return (
        <div className='table'>
            <div className='row'>
                <div className='column'>Купленно <MdAttachMoney/>
                    {sum.usd} --- {sum.byn} --- {sum.price} --- {sum.srusd}
                </div>
            </div>
            {data.map(
                (arr, i)=>{
                    return (
                        <div className='row' key={i}>
                            <div className='column'>{i+1})</div>
                            <div className='column date'>{SimpleDate(arr.date)}</div>
                            <div className='column'>{arr.increase ? <MdTrendingUp color={'#f44336'} size={'20px'}/> : <MdTrendingDown color={'#4CAF50'} size={'20px'}/>}</div>
                            <div className='column'>{arr.prorate}</div>
                            {arr.buy? <div className='column not-buy'><BiMessageSquareCheck color={'inherit'} size={'20px'}/></div> : <div className='column buy'><BiMessageSquareX color={'inherit'} size={'20px'}/></div>}
                            {arr.buy ? <div className='column'><MdAttachMoney/> {arr.usd}</div> : <div className='column'><MdMoneyOff color={'#f44336'}/></div>}
                            <div className='column byn'>{arr.buy ? arr.byn : <MdMoneyOff color={'#f44336'}/>}</div>
                        </div>
                    )
                }
            )}
        </div>
    )
}
export default Table;