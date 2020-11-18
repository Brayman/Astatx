import React from 'react';
import { BiListUl, BiUser, BiGridAlt, BiHomeAlt, BiImport, BiLogIn } from "react-icons/bi";
import '../css/menu.css';

function Menu({status}) {
    if (status) {
        return (
            <div className={`menu`}>
                <BiHomeAlt/>
                <BiListUl/>
                <BiGridAlt/>
                <BiUser/>
            </div>
         )
    } else {
        return (
            <div className={`menu`}>
                <div>
                    <BiLogIn/>
                    Log in
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