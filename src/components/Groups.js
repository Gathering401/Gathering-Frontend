import React, { useState, useEffect } from 'react';
import {Card, Container,Col, Row} from 'react-bootstrap';
import { Badge} from 'reactstrap';
import '../App.css'
import { useAuth } from '../context/auth';



export default function Groups() {
    const { user } = useAuth();
    const userAPI = 'https://gathering.azurewebsites.net/api/Group';
    const [groups,setGroups] = useState([]);

    useEffect(() => {
        async function getGroups() {
          const result = await fetch(`${userAPI}`,{
            headers: {
              'Authorization': `Bearer ${user.token}`
            },
          });
          const resultBody = await result.json();
          
          return setGroups(resultBody);
        }
        getGroups();
      },);
       

      return (
        <>
          {groups.map((group) => (
            <Card>
              <Card.Body>
                <Card.Title>{group.groupName}</Card.Title>
                <Container>
                                <Card.Text>{group.groupName} </Card.Text>
                                <Card.Text>{group.description}</Card.Text>
                                <Card.Text>{group.members}</Card.Text>
                                <Card.Text>{group.location}</Card.Text>
                            <Row>
                                <Card>
                                    <Card.Text>
                                        <Badge className="Button" color="info" pill>Invite Member</Badge>
                                        <Badge className="Button" color="info" pill>Host New Event</Badge>
                                        <Badge className="Button" color="info" pill>Leave Group</Badge>
                                    </Card.Text>
                                </Card>
                            </Row>
                            </Container>
          </Card.Body>
        </Card>
      ))}
      
      
    </>
  )
}

function groupEvent(props) {
  const {groupEvents} = props;
  
  return (
    <Row>
        {groupEvents.map((event) => (
          <Col>
            <Card>
              <Card.Title>{event.eventName}</Card.Title>
                                <Card.Text>
                                    <Badge className="Button" color="success" pill>Going</Badge>
                                    <Badge className="Button" color="info" pill>Maybe</Badge>
                                    <Badge className="Button" color="danger" pill>No</Badge>
                                    </Card.Text>
            </Card>
          </Col>
        ))}
    </Row>
  )
        }