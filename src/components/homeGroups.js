import React, { useState, useEffect } from 'react';
import {Card, Container,Col, Row} from 'react-bootstrap';
import { Badge} from 'reactstrap';
import '../App.css'
import { useAuth } from '../context/auth';
import Event from './Event';




export default function HomeGroups() {
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
    // eslint-disable-next-line
  },[user]);
   
  console.log(groups);

  return (
    <>
      {groups.map((group) => (
        <Card className="group-card">
          <Card.Body>
            <Card.Title>{group.groupName}</Card.Title>
            <Container>
              <Card.Text>{group.description}</Card.Text>
              <GroupEvent groupEvents={group.groupEvents}/>
              <div className="event-stuff">
              <Event />
              </div>
            </Container>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

function GroupEvent(props) {
  const {groupEvents} = props;
  return (
    
    <Row>
        {groupEvents.map((event) => (
          
          <Col>
            <Card className="event-card">
              <Card.Title>{event.eventName}</Card.Title>
              <Card.Text>
                <Badge className="Button" color="success" pill>Status</Badge>
              </Card.Text>
            </Card>
            
          </Col>
          
        ))}
        
    </Row>                
  )
}

