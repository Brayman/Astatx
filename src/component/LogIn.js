import React, {useState} from 'react';
import { FiXCircle, FiCheckCircle } from "react-icons/fi";
import '../css/SignIn.css';

 function password(atr) {
    if (!atr) {
        return <FiXCircle className='wrong' />
    } else {
        return <FiCheckCircle className='good'/>
    }
}
function decorate(atr) {
    if (!atr) {
        return 'wrong'
    } else {
        return 'good'
    }
}

function LogIn({actions}) {
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
            default:
                break;
        }
    }
    
    return (
        <div className='signin_form'>
            Login
            <input type="text" name='login' onChange={EnterPass} />
            
            <label htmlFor='password'>Password</label>
            <input type="password"  name='password' onChange={EnterPass} />

            
                <button className='button' onClick={() => actions.loginAction(data)}>войти</button>
            
       </div>
    )
} 

export default LogIn;