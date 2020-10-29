import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAuth } from '../../context/auth';
import { Redirect } from 'react-router';

export default function LoginForm() {
    const { login, user } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        const { target } = e;

        const { username, password } = target.elements;

        if (!await login(username.value, password.value)) {
            target.reset();
        }
    }
    
    if (user) {
        return (
            <Redirect to="/" />
        )
    }

    return (
        <Container className="login">
            <Row>
                <Col lg={4}></Col>
                <Col lg={4}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="login-form">
                            <h1>Log In</h1>
                            <Form.Control placeholder="Username" name="username"></Form.Control>
                            <br></br>
                            <Form.Control placeholder="Password" name="password" type="password"></Form.Control>
                            <br></br>
                            <Button type="submit">Sign In</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
