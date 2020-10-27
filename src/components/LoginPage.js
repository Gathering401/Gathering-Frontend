import React, { useState } from 'react';
import LoginForm from './auth/LoginForm';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';

export default function Login() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
            <Header />
            <LoginForm />
            <Button onClick={handleShow}/>

            <Modal
            show={show}
            onHide={handleClose}
            backdropClassName="static"
            keyboard= {false}
            >
                
            </Modal>
        </>
    );
}