import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
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
                                <Card.Title>Group Details</Card.Title>
                                <Card.Text>Group Name: </Card.Text>
                                <Card.Text># of Members: </Card.Text>
                                <Card.Text>Location: </Card.Text>
                            </Card>
                            </Row>
                            <Row>
                                <Card>
                                    <Card.Text>
                                        <Badge className="Button" color="info" pill>Invite Member</Badge>
                                        <Badge className="Button" color="info" pill>Host New Event</Badge>
                                        <Badge className="Button" color="info" pill>Leave Group</Badge>
                                    </Card.Text>
                                </Card>
                            </Row>
                        </Col>

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