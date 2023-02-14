import React , {  useState, useEffect }from "react";
import "./styles/login.css";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import SearchCard from "./SearchCard";

function Search() {
    const [search, setSearch] = useState('');
    const [resD, setresD] = useState([]);
    const historyRedirect = useNavigate();

    useEffect(() => {
        let usercheck = sessionStorage.getItem("currentuser");
        let usercheckJson = JSON.parse(usercheck);
        if (!usercheckJson) {
            historyRedirect("/login/donor");
        } else {
            historyRedirect("/users/donor")
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let val = sessionStorage.getItem("currenttoken");
    
            const options = { headers: { Authorization: "Bearer" + " " + val} }
            const res = await axios.get(`http://localhost:5000/api/recipients/fetchdonations?type=${search}`, options);
    
            if (res.data.response) {
                toast.success("Results Fetched successfully");
                setresD(res.data.response)
            }
            if (res.data.error) {
                toast.error(res.data.error);
            }
        } catch (e) {
            toast.error(e);   
        }
    }

    return (
        <>
        <div className="auth-form-container" style={{padding: 100}}>
            <h2>Search For Donors</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="search">Hair Type</label>
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder = "Search with hair type" id="search" name="search" required />
                <button type="submit" style={{marginTop: 20, borderRadius : 10}}>Search</button>
            </form>
            </div>
            <div className="container">
                {resD.length !== 0 ? resD.map((item) => (<SearchCard hair={item.donationDetails.hairtype} donation={item.donationDetails.donationtype}
                    name={item.donorDetails.username} mail={item.donorDetails.mail} phn = {item.donorDetails.phone_number} />)) : (<h1>No Matches found</h1>)}
            </div>
            <ToastContainer />
        </>
    );
}

export default Search;