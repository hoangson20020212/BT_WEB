import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [repass, setRePass] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');


    // JS



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

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
    

    return (
        <div className="auth-form-container">
            <h2>Sign Up</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name" type="text" id="hoten" class="TruongBatbuoc">Full name</label>
                <input value = {name} onChange={(e) => setName(e.target.value)} onBlur={(e)=> chuanHoaTen(e.target.value) } id="name" placeholder="full Name" name="name" />
        
                <label htmlFor="email">Email</label>
                <input value= {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder = "youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value = {pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder = "*********" id="password" name="password" />
                <label htmlFor="repassword">Rewrite password</label>
                <input value = {repass} onChange={(e) => setRePass(e.target.value)} type="repassword" placeholder = "*********" id="repassword" name="repassword" />
                
                <label htmlFor ="address">Address</label>
                <input value = {address} onChange = {(e) => setAddress(e.target.value)} type = "address" placeholder = "address" id="address" name="address" />
                <label htmlFor ="PhoneNumber">Phone Number</label>
                <input value = {phoneNumber} onChange = {(e) => setPhoneNumber(e.target.value)} type = "phonenumber" placeholder = "phonenumber" id="phonenumber" name="phonenumber" />
                <label htmlFor ="sex">Sex</label>
                <input type="radio"  name="sex"/>Male
                <input type="radio"  name="sex"/>Female

                <label htmlFor ="dateOfBirth">Date of birth</label>
                <input value = {dateOfBirth} onChange = {(e) => setDateOfBirth(e.target.value)} onKeyUp ={(e)=>ngaySinh(e.target.value)} placeholder="nn/tt/nnnn"  type = "born" id="born" name="born" />

                <button type = "submit">Sign In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}