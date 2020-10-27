import React, { useState } from 'react';
import LoginForm from './auth/LoginForm';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import Register from './auth/RegisterForm';

export default function Login() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Header />
            <LoginForm />
            <Button onClick={handleShow}>Click to Register</Button>

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