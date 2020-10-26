import React, {useState} from 'react';
import {Card, Container,Col, Row} from 'react-bootstrap';
import {Button, Badge} from 'reactstrap';
import '../App.css'


export default function homeGroups() {
  
  return (
    <>
      <Card>
        
        <Card.Body>
          <Card.Title>Group Name</Card.Title>
          <Container>
            <Row>
              <Col>
                <Card>
                  <Card.Title>Event Name</Card.Title>
                  <Card.Text>
                    <Badge className="Button" color="success" pill>Status</Badge>
                  </Card.Text>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Title>Event Name</Card.Title>
                  <Card.Text>
                    <Badge className="Button" color="success" pill>Status</Badge>
                  </Card.Text>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Title>Event Name</Card.Title>
                  <Card.Text>
                    <Badge className="Button" color="success" pill>Status</Badge>
                  </Card.Text>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Title>Event Name</Card.Title>
                  <Card.Text>
                    <Badge className="Button" color="warning" pill>Status</Badge>
                  </Card.Text>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Title>Event Name</Card.Title>
                  <Card.Text>
                    <Badge className="Button" color="danger" pill>Status</Badge>
                  </Card.Text>
                </Card>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      
    </>
  )
}

