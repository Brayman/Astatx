import React, {useState} from 'react';
import { FiXCircle } from "react-icons/fi";
import '../css/SignIn.css';

 function password(atr) {
    if (!atr) {
        return <FiXCircle className='wrong' />
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
                if (data.password===e.target.value) {
                    setData({...data,passwordtrue: true})
                }
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
            <input type="password"  name='password' onChange={EnterPass} />
            <div>
                Repeat password
                <input type="password" name='repeatpassword' onChange={EnterPass}/> {password(data.passwordtrue)}
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