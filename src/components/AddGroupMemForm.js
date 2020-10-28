import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AddMemForm() {

    // eslint-disable-next-line no-undef
    handleSubmit(EventTarget);
        return new Promise((resolve, reject) => {
          this.setState({ isProcessing: true });
          client.sendApiRequest({
            username: EventTarget.elements.username.value,
            email: EventTarget.elements.email.value,
            phone: EventTarget.elements.phone.value,
          }).then(response => {
            if (response.ok) {
              this.setState({
                isProcessing: false,
                username: EventTarget.target.elements.username.value,
                email: EventTarget.target.elements.email.value,
                phone: EventTarget.target.elements.phone.value,
              });
            }
          });
        });
      }

    return (
        <Container>
            <Row>
            <Col lg={4}></Col>
                <Col lg={4}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Invite Member</Form.Label>
                            <Form.Control placeholder="username" name="UserID" type="ID"></Form.Control>
                            <Form.Control placeholder="example@example.com" name="Email" type="email"></Form.Control>
                            <Form.Control placeholder="5155550176" name="Phone" type="phone"></Form.Control>
                            <Button type="submit" color="info" pill>Invite Group Member</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
