import React, {useState} from "react";
import isEmpty from "validator/lib/isEmpty";
import {useNavigate} from 'react-router-dom'

function Login () {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [validationMsg, setValidationMsg] = useState('');
    const navigate = useNavigate();

    const validateAll = () => {
        const msg = {};
        if (isEmpty(email)) {
            msg.email = "Please input your Email"
        }
        if (isEmpty(pass)) {
            msg.pass = "Please input your Password"
        }
        setValidationMsg(msg)
        if (Object.keys(msg).length>0) return false
        return true
    }

    function handleRegister() {
        // navigate('/register');       
    }

    const handleSubmit = () => {
        //alert("Đăng nhập thành công");
        //navigate('/main');  
    }
    
    const onSubmitLogin = () => {
        const isValid = validateAll()
        if(!isValid) {console.log("chay2 ");} 
        // else {
        //     console.log("gì đó")
        //     }
        // call api
    }

    

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label for="email">Email</label>
                <input value= {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder = "youremail@gmail.com" id="email" name="email" />
                <p className="checkLoi">{validationMsg.email}</p>
                <label for="password">Password</label>
                <input value = {pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder = "*********" id="password" name="password" />
                <p className="checkLoi">{validationMsg.pass}</p>               
                <button onClick={onSubmitLogin} type = "button" >Log In</button>
            </form>
            <button className="link-btn" onClick={handleRegister} >Don't have an account? Register here.</button>
        </div> 
    )
}
export default Login;