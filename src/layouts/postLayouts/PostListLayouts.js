import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function PostListLayouts({ title, body, id ,key}) {
    return (
        <Accordion defaultActiveKey={key}>
            <Accordion.Item eventKey={key}>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                    {body}
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    );
}
