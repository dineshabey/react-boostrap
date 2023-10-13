import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function UsersCards({name,id,email,username,companyInfo,phone}) {
    return (
        <Card>
            <Card.Header>{name} - <b>{id}</b></Card.Header>
            <Card.Body>
                <Card.Title>{username}</Card.Title>
                <Card.Text>
                   {email} 
                   <p>{companyInfo}</p>
                   {phone}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}
