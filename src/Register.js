import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles/login.css";


function Register(props){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [pass, setPass] = useState('');
    const [pass2, setPass2] = useState('');
    const [phone, setPhone] = useState('');
    const [lat, setLat] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, ', ', email, ', ', role, ', ', pass, ', ', pass2, ', ', phone);
        if (pass != pass2) {
            toast.error('Password doesn not match', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }

    function showPosition(position) {
        let ob = {
            lat: position.coords.latitude,
            long : position.coords.longitude
        }
        setLat(ob);
    }

    console.log(lat);
    
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert('Your browser does not support geoloaction api');
        }
    }

    useEffect(() => {
        getLocation()
    }, []);

    return (
        <>
        <div className="auth-form-container" style={{}}>
            <h2>Register</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username"  required/>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" required />
                <label htmlFor="role">Role</label>
                <input value={role} onChange={(e) => setRole(e.target.value)} type="text"  placeholder= "DONOR, RECIPIENT" id="role" name="role" required />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required />
                <label htmlFor="password2">Confirm Password</label>
                <input value={pass2} onChange={(e) => setPass2(e.target.value)} type="password" placeholder="********" id="password2" name="password2" required />
                <label htmlFor="phone">Phone number</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="phone"  id="phone" name="phone" required />
               
                <button type="submit" style={{marginTop : 20, borderRadius :10, width : 100}}>Register</button>
            </form>
           
            </div>
            <ToastContainer />
            </>
    )
}


export default Register;