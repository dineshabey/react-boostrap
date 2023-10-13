import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function PostListLayouts({ title, body, id, key }) {
    return (
        <div>
            <Accordion defaultActiveKey={key}>
                <Accordion.Item eventKey={key}>
                    <Accordion.Header>{title}</Accordion.Header>
                    <Accordion.Body>
                        {body}
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    );
}
