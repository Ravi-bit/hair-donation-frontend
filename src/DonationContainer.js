import React, {useState} from "react";
import { useEffect } from "react";
import "./styles/login.css";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import CustomCard from "./CustomCard";
import './styles/cardContainer.css'
import { useNavigate } from "react-router-dom";

function DonationContainer() {

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

    
    useEffect(() => {
        const fetchData = async () => {
            try { console.log("Inside useEffect")
                let val = sessionStorage.getItem("currenttoken");
                const options = { headers: { Authorization: "Bearer" + " " + val } }
                console.log('after options')
                
                const res = await axios.get('http://localhost:5000/api/donors/requests',  options);
        
                if (res.data.donations) {
                    toast.success("Fetched the records successfully");
                    setresD(res.data.donations)
                }
                if (res.data.error) {
                    toast.error(res.data.error);
                }
            } catch (e) {
                toast.error(e);   
            }
        }
    

        fetchData();

    }, []); 
    
    return (
        <div className="container">
            <h1 style={{ textAlign: 'center' }}>Your Submitted donations</h1>
            {resD.map((donation) => (<CustomCard key = {donation.id} donationtype={donation.donationtype } donationstatus={donation.donationstatus} hairtype={donation.hairtype} time={donation.createdat} />))}
            <ToastContainer/>
        </div>
    );
}

export default DonationContainer;