import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function SearchCard(props) {

    const requestHandler = async () =>{

    }
    return (
        <div>
            <Card style={{ width: '15rem', margin:20 }}>
            <Card.Body>
                <Card.Title>Hair Type : <b>{props.hair}</b></Card.Title>
                <Card.Text>
                        Donation Type : <b>{props.donation}</b><br></br>
                        Donor name : <b>{props.name}</b><b></b>
                        Donor email : <b>{props.mail}</b><b></b>
                        Donor phone number: <b>{props.phn}</b><b></b>
                </Card.Text>
                {props.statusn === 0 ? <Button variant="primary" id = {props.donationid} onClick={{requestHandler}}>Request</Button> : <Button variant="secondary" disabled = {true}>Not available</Button>}
            </Card.Body>
            </Card>
        </div>
    );
}


export default SearchCard;