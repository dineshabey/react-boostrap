import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function UsersCards({ handleUserSelected,name, id, email, username, companyInfo, phone }) {
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
                <Button variant="primary" onClick={()=>handleUserSelected(id)}>Get user #{id} Posts</Button>
            </Card.Body>
        </Card>
    );
}
