import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useHistory ,
    useLocation
  } from "react-router-dom";
import { ImSortAmountAsc, ImSortAmountDesc } from "react-icons/im";

function Filter(props) {
    let match = useLocation();
    console.log(match);
    return (
        <div className='filter'>
                <NavLink to='/' className='button' onClick={()=>{
                    props.filterAction('')
                }}>
                    Все
                </NavLink>
                <NavLink to='?filter=7' className='button' onClick={()=>{
                    props.filterAction('?filter=7')
                }}>
                    Неделя
                </NavLink>
                <NavLink to='?filter=30' className='button' onClick={()=>{
                    props.filterAction('?filter=30')
                }}>   Месяц
                </NavLink>
                <NavLink to='?filter=90' className='button' onClick={()=>props.filterAction('?filter=90')}>
                    6 Месяцев
                </NavLink>
        </div>
    )
} 

export default Filter;