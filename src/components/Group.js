import React, { useState, useEffect, useCallback } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import '../App.css'
import { useAuth } from '../context/auth';
import Event from './Event';
import AddUser from './AddUser';
import EventDetail from './EventDetail';
import { Badge } from 'reactstrap';

export default function Group(props) {
  const { groupId } = props;
  const { user } = useAuth();
  const userAPI = `https://gathering.azurewebsites.net/api/Group/${groupId}`;
  const [group, setGroup] = useState({});

  const getGroup = useCallback(async function getGroup() {
    if (!user) {
      setGroup({})
      return;
    }
    const result = await fetch(`${userAPI}`, {
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
    });
    const resultBody = await result.json();
    return setGroup(resultBody);
  }, [user, userAPI])

  useEffect(() => {
    getGroup();
  }, [getGroup]);

  if (!group.groupEvents) {
    return (
      <>
      </>
    )
  }
  return (
    <>
      <div className="event-top">
        <h1>{group.groupName}</h1>
        <Card.Text>{group.description}</Card.Text>
        <Card.Text>Location: {group.location}</Card.Text>
        <Card>
          <Card.Body>
            <Container>
              <Card.Text className="all-events">
                <GroupEvents groupEvents={group.groupEvents} />
              </Card.Text>
            </Container>
            <Event groupId={groupId} onCreate={getGroup} />
            {"  "}
            <AddUser groupId={groupId} />
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

function GroupEvents(props) {
  const { groupEvents } = props;

  return (
    <Row>
      {groupEvents.map((event) => (
        <Col>
          <Card className="event-card">
            <Card.Title>{event.eventName}</Card.Title>
            <Badge className="Button" color="success">Going</Badge>
            <Card.Text className="event-button">
              <br></br>
              <EventDetail eventId={event.eventId} />
            </Card.Text>
          </Card>
          <br></br>
          <br></br>
        </Col>
      ))}
    </Row>
  )
}