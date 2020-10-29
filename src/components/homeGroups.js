import React, { useState, useEffect } from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import { Badge } from 'reactstrap';
import '../App.css';
import { useAuth } from '../context/auth';
import EventDetail from './EventDetail';
import { Link } from 'react-router-dom';
import CreateGroupForm from './CreateGroupForm';

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
    <>
      {groups.map((group) => (
        <Card>
          <Card.Body>
            <Link to={`/Group/${group.groupId}`}>
              <Card.Title className="group-title"><h2>{group.groupName}</h2></Card.Title>
            </Link>
            <Container>
              <Card.Text>{group.description}</Card.Text>
              <GroupEvent groupEvents={group.groupEvents} />
            </Container>
          </Card.Body>
        </Card>
      ))}
      <CreateGroupForm />
    </>
  )
};

function GroupEvent(props) {
  const { groupEvents } = props;
  return (
    <Row>
      {groupEvents.map((event) => (
        <Col>
          <Card className="event-card">
            <Card.Title>{event.eventName}</Card.Title>
            <Badge className="Button" color="success">Status</Badge>
            <Card.Text className="event-button">
              <EventDetail eventId={event.eventId} />
            </Card.Text>
          </Card>
        </Col>
      ))}
    </Row>
  )
};
