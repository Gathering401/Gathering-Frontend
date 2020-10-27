import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { Badge } from 'reactstrap';
import '../App.css'

export default function Groups() {
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>Group Page</Card.Title>
                    <Container>
                        <Row>
                            <Card>
                                <Card.Title>Group Details</Card.Title>
                                <Card.Text>
                                    <Badge className="Button" color="info" pill>Details</Badge>
                                </Card.Text>
                            </Card>
                        </Row>
                        <Row>
                            <Card>
                                <Card.Title>Group Events</Card.Title>
                                <Card.Text>
                                    <Badge className="Button" color="info" pill>Details</Badge>
                                </Card.Text>
                            </Card>
                        </Row>
                        <Row>
                            <Card>
                                <Card.Title>Event Name</Card.Title>
                                <Card.Text>
                                    <Badge className="Button" color="info" pill>Details</Badge>
                                </Card.Text>
                            </Card>
                        </Row>
                        <Row>
                            <Card>
                                <Card.Title>Event Name</Card.Title>
                                <Card.Text>
                                    <Badge className="Button" color="info" pill>Details</Badge>
                                </Card.Text>
                            </Card>
                        </Row>
                        <Row>
                            <Card>
                                <Card.Title>Event Name</Card.Title>
                                <Card.Text>
                                    <Badge className="Button" color="info" pill>Details</Badge>
                                </Card.Text>
                            </Card>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </>
    )
}