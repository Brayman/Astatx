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
                <NavLink to={`${loc.pathname}?filter=7`} className='button' onClick={()=>{
                    filterAction({other:'?filter=7', login: login})
                }}>
                    Неделя
                </NavLink>
                <NavLink to={`${loc.pathname}?filter=30`} className='button' onClick={()=>{
                    filterAction({other:'?filter=30', login: login})
                }}>   Месяц
                </NavLink>
                <NavLink to={`${loc.pathname}?filter=90`} className='button' onClick={()=>filterAction({other:'?filter=90', login: login})}>
                    3 Месяца
                </NavLink>
                <NavLink to={`${loc.pathname}?filter=120`} className='button' onClick={()=>filterAction({other:'?filter=120', login: login})}>
                    6 Месяцев
                </NavLink>
        </div>
    )
} 

export default Filter;