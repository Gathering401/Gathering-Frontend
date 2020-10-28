import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Login from './LoginPage';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function LoginForm() {

    async function handleSubmit(e) {
        e.preventDefault();
        const { target } = e;

        const { username, password } = target.elements;

        if (!await Login(username.value, password.value)) {
            target.reset();
        }
    }

    return (
        <Container>
            <Row>
            <Col lg={4}></Col>
                <Col lg={4}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Log In</Form.Label>
                            <Form.Control placeholder="Username" name="username"></Form.Control>
                            <Form.Control placeholder="Password" name="password" type="password"></Form.Control>
                            <Button type="submit" color>Sign In</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
