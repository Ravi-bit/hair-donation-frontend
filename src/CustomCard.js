import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


function CustomCard(props) {
    const deleteHandler = async(e) => {
        try { 
            let val = sessionStorage.getItem("currenttoken");
            const options = { headers: { Authorization: "Bearer "+ val } }
        
            const res = await axios.get('http://localhost:5000/api/donors/requests',  options);
    
            if (res.data.message) {
                toast.success("Deleted successfully");
                props.updat();
            }
            if (res.data.error) {
                toast.error(res.data.error);
            }
        } catch (e) {
            toast.error(e);   
        }
    }
    return (
        <div>
            <Card style={{ width: '15rem', margin:20 }}>
            <Card.Body>
                <Card.Title>Hair Type : <b>{props.hairtype}</b></Card.Title>
                <Card.Text>
                        Donation Type : <b>{props.donationtype}</b><br />
                        Donation Status : {props.donationstatus === 0 ? '<b>Available</b>' : '<b>Available</b>'} <br></br>
                        Created Time: {Date(props.time)}
                </Card.Text>
                <Button variant="danger" id = {props.id} onClick={deleteHandler}>Delete Donation</Button>
            </Card.Body>
            </Card>
            <ToastContainer />
        </div>
    );
}


export default CustomCard;