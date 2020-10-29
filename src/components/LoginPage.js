import React, { useState } from 'react';
import LoginForm from './auth/LoginForm';
import Button from 'react-bootstrap/Button';
import { Modal, Container } from 'react-bootstrap';
import Register from './RegisterForm';

export default function Login() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Container className="login-box">
            <LoginForm />
            <Button onClick={handleShow}>Click to Register</Button>
        </Container>
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
                    <Register />
                </Modal.Body>
            </Modal>
        </>
    );
}