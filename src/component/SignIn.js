import React, {useState} from 'react';
import {
    NavLink
  } from "react-router-dom";



function SignIn({actions}) {
    const [data, setData] = useState({
        login: '',
        password: '',
        bank: ''
    })
    const EnterPass = (e) => {
        switch (e.target.name) {
            case 'login':
                setData({...data,login: e.target.value})
                break;
            case 'password':
                setData({...data,password: e.target.value})
                break;
            case 'bank':
                setData({...data,bank: e.target.value})
                break;
            default:
                break;
        }
    }
    return (
        <div className='MyForm'>
            Login
            <input type="text" name='login' onChange={EnterPass} />
            Password
            <input type="password" name='password' onChange={EnterPass} />
            Your bank
            <input type="text" name='bank' onChange={EnterPass}/>
            
            <div className='button' >
                <div onClick={() => actions.regAction(data)}>Зарегистрироваться</div>
                <div>или</div>
                <div onClick={() => actions.loginAction(data)}>войти</div>
            </div>
       </div>
    )
} 

export default SignIn;