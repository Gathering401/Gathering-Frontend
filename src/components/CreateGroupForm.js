import React, { useState } from 'react';
import { useAuth } from '../context/auth';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';


export default function Group() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const { user } = useAuth();
    const groupAPI = 'https://gathering.azurewebsites.net/api/Group';

    async function handleSubmit(e) {
        e.preventDefault();
        const { target } = e;
        const { groupName, location, description } = target.elements;

        if (!await groupCreate(groupName.value, location.value, description.value)) {
            target.reset();
        }
    };

    async function groupCreate(groupName, location, description) {
        await fetch(groupAPI, {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ groupName, location, description })
        });
    };

    return (
        <>
            <Button onClick={handleShow}>Create a new group</Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Register a new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Label>Group Name</Form.Label>
                        <Form.Control required placeholder="Give your group a name" name="groupName"></Form.Control>
                        <Form.Label>Location</Form.Label>
                        <Form.Control required placeholder="Enter a location for your group" name="location"></Form.Control>
                        <Form.Label>Description</Form.Label>
                        <Form.Control required placeholder="Describe your group" name="description"></Form.Control>
                        <Button type="submit" >Create Group</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};
