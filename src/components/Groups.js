import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { Badge } from 'reactstrap';
import '../App.css'

export default function Groups() {
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>Gathering - Group Page</Card.Title>
                    <Container>
                        <Col>
                        <Row>
                            <Card>
                                <Card.Title>Events</Card.Title>
                            </Card>
                        </Row>
                        <Row>
                            <Card>
                                <Card.Title>Event Name</Card.Title>
                                <Card.Text>
                                    <Badge className="Button" color="success" pill>Going</Badge>
                                    <Badge className="Button" color="info" pill>Maybe</Badge>
                                    <Badge className="Button" color="danger" pill>No</Badge>
                                </Card.Text>
                            </Card>
                        </Row>
                        <Row>
                            <Card>
                                <Card.Title>Event Name</Card.Title>
                                <Card.Text>
                                    <Badge className="Button" color="success" pill>Going</Badge>
                                    <Badge className="Button" color="info" pill>Maybe</Badge>
                                    <Badge className="Button" color="danger" pill>No</Badge>
                                </Card.Text>
                            </Card>
                        </Row>
                        <Row>
                            <Card>
                                <Card.Title>Event Name</Card.Title>
                                <Card.Text>
                                    <Badge className="Button" color="success" pill>Going</Badge>
                                    <Badge className="Button" color="info" pill>Maybe</Badge>
                                    <Badge className="Button" color="danger" pill>No</Badge>
                                </Card.Text>
                            </Card>
                        </Row>
                        <Row>
                            <Card>
                                <Card.Title>Event Name</Card.Title>
                                <Card.Text>
                                    <Badge className="Button" color="success" pill>Going</Badge>
                                    <Badge className="Button" color="info" pill>Maybe</Badge>
                                    <Badge className="Button" color="danger" pill>No</Badge>
                                </Card.Text>
                            </Card>
                        </Row>
                        </Col>
                    </Container>
                </Card.Body>
            </Card>
        </>
    )
}