import React, { useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import {useNavigate} from 'react-router-dom'

function Register () {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [repass, setRePass] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [validationMsg, setValidationMsg] = useState('');
    const navigate = useNavigate();

    // validate form
    const chuanHoaTen = (ten) => {
        let dname = ten;
        let ss = dname.split(" ");
        dname = "";
        for (let i = 0; i < ss.length; i++)
            if (ss[i].length > 0) {
                if (dname.length > 0) dname = dname + " ";
            dname = dname + ss[i].substring(0, 1).toUpperCase();
            dname = dname + ss[i].substring(1).toLowerCase();
        }
        setName(dname);
    }

    const ngaySinh = (ten) => {
        let dday = ten;
        dday = dday.replace(
            /^([\d]{2})([\d]{2})([\d]{4})$/,
            "$1/$2/$3"
          );
        setDateOfBirth(dday);
    }
    
    const validateAll = () => {
        const msg = {};
        if (isEmpty(name)) {
            msg.name = "Please input your Full name"
        }
        if (isEmpty(email)) {
            msg.email = "Please input your Email"
        }

        if (isEmpty(pass)) {
            msg.pass = "Please input your Password"
        }

        if (isEmpty(repass)) {
            msg.repass = "Please Rewrite your Password"
        }

        if (repass !== pass) {
            msg.repass = "Password does not match"
        }

        if (isEmpty(address)) {
            msg.address = "Please input your Address"
        }
        if (isEmpty(phoneNumber)) {
            msg.phoneNumber = "Please input your Phone Number"
        }
        
        if (isEmpty(dateOfBirth)) {
            msg.dateOfBirth= "Please input your Date of Birth"
        }

        setValidationMsg(msg)
        if (Object.keys(msg).length>0) return false
        return true
    }

    //Submit event
    const onSubmitSignUp = () => {
        const isValid = validateAll()
        if(!isValid) {console.log("chay2 ");} 
        // call api
    }

    function handleLogin() {
        navigate('/login');       
    }

    const handleSubmit = (e) => {
        alert("Đăng kí thành công");
        navigate('/login')
    }

    return (
        <div className="auth-form-container">
            <h2>Sign Up</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name" type="text" id="hoten" class="TruongBatbuoc">Full name</label>
                <input value = {name} onChange={(e) => setName(e.target.value)} onBlur={(e)=> chuanHoaTen(e.target.value) } id="name" placeholder="full Name" name="name" />
                <p className="checkLoi">{validationMsg.name}</p>
                <label htmlFor="email">Email</label>
                <input value= {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder = "youremail@gmail.com" id="email" name="email" />
                <p className="checkLoi">{validationMsg.email}</p>
                <label htmlFor="password">Password</label>
                <input value = {pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder = "*********" id="password" name="password" />
                <p className="checkLoi">{validationMsg.pass}</p>
                <label htmlFor="password">Rewrite password</label>
                <input value = {repass} onChange={(e) => setRePass(e.target.value)} type="password" placeholder = "*********" id="repassword" name="repassword" />
                <p className="checkLoi">{validationMsg.repass}</p>
                <label htmlFor ="address">Address</label>
                <input value = {address} onChange = {(e) => setAddress(e.target.value)} type = "address" placeholder = "address" id="address" name="address" />
                <p className="checkLoi">{validationMsg.address}</p>
                <label htmlFor ="PhoneNumber">Phone Number</label>
                <input value = {phoneNumber} onChange = {(e) => setPhoneNumber(e.target.value)} type = "phonenumber" placeholder = "phonenumber" id="phonenumber" name="phonenumber" />
                <p className="checkLoi">{validationMsg.phoneNumber}</p>
                <label htmlFor ="sex">Sex</label>
                <input type="radio"  name="sex"/>Male
                <input type="radio"  name="sex"/>Female
                <label htmlFor ="dateOfBirth">Date of birth</label>
                <input value = {dateOfBirth} onChange = {(e) => setDateOfBirth(e.target.value)} onKeyUp ={(e)=>ngaySinh(e.target.value)} placeholder="nn/tt/nnnn"  type = "born" id="born" name="born" />
                <p className="checkLoi">{validationMsg.dateOfBirth}</p>
                <button onClick={onSubmitSignUp} type = "submit">Sign Up</button>
            </form>
            <button className="link-btn" onClick={handleLogin} >Already have an account? Login here.</button>
        </div>
    )
}

export default Register;