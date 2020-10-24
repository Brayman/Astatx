import React from "react";
import { MdTrendingUp, MdTrendingDown, MdMoneyOff, MdAttachMoney } from "react-icons/md";
import { BiMessageSquareCheck, BiMessageSquareX } from "react-icons/bi";



function Table({data}) {
    var sum = 0;
    data.map(arr => {
        if(arr.buy === true) {
            sum = sum + arr.usd
        }
    })
    return (
        <div className='table'>
            <div className='row'>
                <div className='column'>Купленно <MdAttachMoney/>
                    {sum}
                </div>
            </div>
            {data.map(
                (arr, i)=>{
                    return (
                        <div className='row' key={i}>
                            <div className='column'>{i+1})</div>
                            <div className='column'>{arr.date}</div>
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