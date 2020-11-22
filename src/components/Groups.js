import React, { useState, useEffect, useCallback } from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import { Badge } from 'reactstrap';
import '../App.css'
import { useAuth } from '../context/auth';
import EventDetail from './EventDetail';
import { Link } from 'react-router-dom';
import CreateGroupForm from './CreateGroupForm';


export default function HomeGroups() {
  const { user } = useAuth();
  const userAPI = `${process.env.REACT_APP_API_URI}/Group`;
  const [groups, setGroups] = useState([]);

  const getGroups = useCallback(async function getGroups() {

    const result = await fetch(`${userAPI}`, {
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
    });
    const resultBody = await result.json();

    return setGroups(resultBody);
  }, [user, userAPI]);
  useEffect(() => {
    getGroups();
  }, [getGroups]);

  console.log('this is groups', groups);

  return (
    <>
      <CreateGroupForm onCreate={getGroups} />
      <Container>
        {groups.map((group) => (
          <Row key={group.groupId}>
            <Col>
              <Card className="group-card">
                <Card.Body>
                  <Link to={`/Group/${group.groupId}`}>
                    <Card.Title className="group-title"><h2>{group.groupName}</h2></Card.Title>
                  </Link>
                  <Card.Text>{group.description}</Card.Text>
                  <GroupEvent groupEvents={group.groupEvents} groupId={group.groupId} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  )
}


function GroupEvent(props) {
  const { groupEvents, groupId } = props;
  return (
    <Row>
      {!groupEvents ? null : groupEvents.map((event) => (
          <Card className="event-card" key={event.eventId}>
            <Card.Title>{event.eventName}</Card.Title>
            <Badge className="Button" color="success">Going</Badge>
            <Card.Text className="event-button">
              <br></br>
              <EventDetail eventId={event.eventId} groupId={groupId} />
            </Card.Text>
          </Card>
      ))}
    </Row>

  )
}

