import React from 'react';
import { BiListUl, BiUser, BiGridAlt, BiHomeAlt, BiImport, BiLogIn } from "react-icons/bi";
import '../css/menu.css';
import {  
    NavLink,
    useLocation
} from "react-router-dom";

function Menu({status}) {
    let loc = useLocation();
    if (status) {
        return (
            <div className={`menu`}>
                <BiHomeAlt/>
                <BiListUl/>
                <NavLink to={`${loc.pathname}/catalog`}>
                    <BiGridAlt/>
                </NavLink>
                <BiUser/>
            </div>
         )
    } else {
        return (
            <div className={`menu`}>
                <div>
                    <NavLink to={`/Astatx/signin`}>
                        <BiLogIn/>
                        Log in
                    </NavLink>
                </div>
                <div>
                    <BiImport/>
                    Sign up
                </div>
            </div>
         )
    }
} 

export default Menu;