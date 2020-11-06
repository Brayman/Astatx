import React from 'react';
import {
    BrowserRouter as Router,
    NavLink,
    useLocation
  } from "react-router-dom";
import { ImSortAmountAsc, ImSortAmountDesc } from "react-icons/im";

function Auth() {
    let match = useLocation();
    console.log(match);
    return (
       <div>
           you auth
       </div>
    )
} 

export default Auth;