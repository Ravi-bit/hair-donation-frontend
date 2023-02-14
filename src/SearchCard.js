import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function SearchCard(props) {
    return (
        <div>
            <Card style={{ width: '15rem', margin:20 }}>
            <Card.Body>
                <Card.Title>Hair Type : <b>{props.hair}</b></Card.Title>
                <Card.Text>
                        Donation Type : <b>{props.donation}</b><br />
                        Donor name : <b>{props.name}</b>
                        Donor email : <b>{props.mail}</b>
                        Donor phone number: <b>{props.phn}</b>
                </Card.Text>
                <Button variant="success">Request</Button>
            </Card.Body>
            </Card>
        </div>
    );
}


export default SearchCard;