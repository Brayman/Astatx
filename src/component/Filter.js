import React from 'react';
import {
    NavLink
  } from "react-router-dom";

function Filter(props) {
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
                    3 Месяца
                </NavLink>
                <NavLink to='?filter=120' className='button' onClick={()=>props.filterAction('?filter=120')}>
                    6 Месяцев
                </NavLink>
        </div>
    )
} 

export default Filter;