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
            case 'email':
                console.log(e.target);
                setData({...data,email: e.target.value})
                break;
            case 'bank':
                setData({...data,bank: e.target.value})
                break;
            case 'repeatpassword':
                if (data.password==e.target.value) {
                    setData({...data,passwordtrue: true})
                } else {
                    setData({...data,passwordtrue: false})
                }
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
            <div>
                Repeat password
                <input className={'secondpass '+ decorate(data.passwordtrue)} type="password" name='repeatpassword' onBlur={EnterPass}/> {password(data.passwordtrue)}
            </div>
            
            Email
            <input type="email" name='email' onChange={EnterPass} />
            Your bank
            <input type="text" name='bank' onChange={EnterPass}/>
            
            
                <button className='button' onClick={() => actions.regAction(data)}>Зарегистрироваться</button>
                <div>или</div>
                <button className='button' onClick={() => actions.loginAction(data)}>войти</button>
            
       </div>
    )
} 

export default SignIn;