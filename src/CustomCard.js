import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CustomCard(props) {
    return (
        <div>
            <Card style={{ width: '15rem', margin:20 }}>
            <Card.Body>
                <Card.Title>Hair Type : <b>{props.hairtype}</b></Card.Title>
                <Card.Text>
                        Donation Type : <b>{props.donationtype}</b><br />
                        Created Time: {Date(props.time)}
                </Card.Text>
                <Button variant="danger">Delete Donation</Button>
            </Card.Body>
            </Card>
        </div>
    );
}


export default CustomCard;