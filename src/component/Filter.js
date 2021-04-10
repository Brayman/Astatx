import React from 'react';
import {
    NavLink,
    useLocation

  } from "react-router-dom";

function Filter({filterAction, login}) {
    let loc = useLocation();
    
    return (
        <div className='filter'>
                <NavLink to={`${loc.pathname}`} className='button' onClick={()=>{
                    filterAction({other:'', login: login})
                }}>
                    Все
                </NavLink>
                <NavLink to={`${loc.pathname}?filter=week`} className='button' onClick={()=>{
                    filterAction({other:'?filter=week', login: login})
                }}>
                    Неделя
                </NavLink>
                <NavLink to={`${loc.pathname}?filter=month`} className='button' onClick={()=>{
                    filterAction({other:'?filter=month', login: login})
                }}>   Месяц
                </NavLink>
                <NavLink to={`${loc.pathname}?filter=3month`} className='button' onClick={()=>filterAction({other:'?filter=3month', login: login})}>
                    3 Месяца
                </NavLink>
                <NavLink to={`${loc.pathname}?filter=halfyear`} className='button' onClick={()=>filterAction({other:'?filter=halfyear', login: login})}>
                    6 Месяцев
                </NavLink>
        </div>
    )
} 

export default Filter;