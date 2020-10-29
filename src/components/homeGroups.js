import React, { useState, useEffect } from 'react';
import {Card, Container,Col, Row} from 'react-bootstrap';
import { Badge} from 'reactstrap';
import '../App.css';
import { useAuth } from '../context/auth';
import EventDetail from './EventDetail';
import CreatGroupForm from './CreateGroupForm';
import {Link} from 'react-router-dom';

export default function HomeGroups() {
  const { user } = useAuth();
  const userAPI = 'https://gathering.azurewebsites.net/api/Group';
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    async function getGroups() {

      const result = await fetch(`${userAPI}`, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        },
      });
      const resultBody = await result.json();

      return setGroups(resultBody);
    }
    getGroups();
    // eslint-disable-next-line
  }, [user]);

  console.log(groups);

  return (
    <Row>
      {groups.map((group) => (
        <Card className="group-card">
          <Card.Body>
            <Card.Title>{group.groupName}</Card.Title>
            <Container>
              <Card.Text>{group.description}</Card.Text>
              <GroupEvent groupEvents={group.groupEvents}/>
            </Container>
          </Card.Body>
        </Card>
      ))}
      <CreatGroupForm />
    </>
  )
}

function GroupEvent(props) {
  const {groupEvents} = props;
  return (
    <Row>
      {groupEvents.map((event) => (
        <Col>
          <Card>
            <Card.Title>{event.eventName}</Card.Title>
            <Card.Text>
              <Badge className="Button" color="success" pill>Status</Badge>
              <EventDetail eventId={event.eventId} />
            </Card.Text>
          </Card>
        </Col>
      ))}
    </Row>
  )
};

