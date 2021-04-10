import React from 'react';
import { BiListUl, BiUser, BiGridAlt, BiHomeAlt, BiImport, BiLogIn } from "react-icons/bi";
import '../css/menu.css';
import {  
    NavLink,
    useLocation
} from "react-router-dom";

function Menu({status,user}) {
    let loc = useLocation();
    console.log(loc);
    if (status) {
        return (
            <div className={`menu`}>
                <NavLink to={`/Astatx/${user}/`}>
                    <BiHomeAlt/>
                </NavLink>
                <NavLink to={`/Astatx/${user}/list`}>
                    <BiListUl/>
                </NavLink>
                <NavLink to={`/Astatx/${user}/catalog`}>
                    <BiGridAlt/>
                </NavLink>
                <NavLink to={`/Astatx/${user}/profile`}>
                    <BiUser/>
                </NavLink>   
            </div>
         )
    } else {
        return (
            <div className={`menu`}>
                <div>
                    <NavLink to={`/Astatx/login`}>
                        <BiLogIn/>
                        Log in
                    </NavLink>
                </div>
                <div>
                    <NavLink to={`/Astatx/signin`}>
                        <BiImport/>
                        Sign up
                    </NavLink>
                </div>
            </div>
         )
    }
} 

export default Menu;