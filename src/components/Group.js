import React, { useState, useEffect, useCallback } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import '../App.css'
import { useAuth } from '../context/auth';
import Event from './Event';
import AddUser from './AddUser';
import LeaveGroup from './LeaveGroup';
import EventDetail from './EventDetail';
import DeleteGroup from './DeleteGroup';
import SeeUsers from './SeeUsers';
import UserRequests from './UserRequests';
import { Badge } from 'reactstrap';

export default function Group(props) {
  const { groupId } = props;
  const { user } = useAuth();
  const userAPI = `${process.env.REACT_APP_API_URI}`;
  const [group, setGroup] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  const getGroup = useCallback(async function getGroup() {
    try {
      if (!user) {
        setGroup({})
        return;
      }
      const gu = await fetch(`${userAPI}/GroupUser/${groupId}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
      });
      const guBody = await gu.json();
      setCurrentUser(guBody);

      const result = await fetch(`${userAPI}/Group/${groupId}`, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        },
      });
      const resultBody = await result.json();
      return setGroup(resultBody);
    }
    catch(err) {
      console.log('Error:', err);
    }
  }, [user, userAPI, groupId])

  useEffect(() => {
    getGroup();
  }, [getGroup]);

  if (!group.groupEvents) {
    return (
      <>
      </>
    )
  }
  if(currentUser.roleString === 'owner') {
    return (
      <>
        <div className="event-top">
          <h1>{group.groupName}</h1>
          <Card.Text>{group.description}</Card.Text>
          <Card.Text>Location: {group.location}</Card.Text>
          <Card>
            <Card.Body>
              <Container>
                <div className="all-events">
                  <GroupEvents groupEvents={group.groupEvents} group={groupId}/>
                </div>
              </Container>
              <Event groupId={groupId} onCreate={getGroup} />
              {"  "}
              <AddUser groupId={groupId} />
              {"  "}
              <LeaveGroup groupId={groupId} userId={user.id} />
              <br/>
              <DeleteGroup groupId={groupId} />
              <SeeUsers group={group} currentRole={currentUser.roleString}/>
              <UserRequests group={group} />
            </Card.Body>
          </Card>
        </div>
      </>
    )
  }
  else if(currentUser.roleString === 'admin') {
    return (
      <div className="event-top">
        <h1>{group.groupName}</h1>
        <Card.Text>{group.description}</Card.Text>
        <Card>
            <Card.Body>
              <Container>
                <div className="all-events">
                  <GroupEvents groupEvents={group.groupEvents} group={groupId}/>
                </div>
              </Container>
              <Event groupId={groupId} onCreate={getGroup} />
              {"  "}
              <AddUser groupId={groupId} />
              {"  "}
              <LeaveGroup groupId={groupId} userId={user.id} />
              <SeeUsers group={group} currentRole={currentUser.roleString}/>
              <UserRequests group={group} />
            </Card.Body>
          </Card>
      </div>
    )
  }
  else if(currentUser.roleString === 'creator') {
    return (
      <div className="event-top">
        <h1>{group.groupName}</h1>
        <Card.Text>{group.description}</Card.Text>
        <Card>
            <Card.Body>
              <Container>
                <div className="all-events">
                  <GroupEvents groupEvents={group.groupEvents} group={groupId}/>
                </div>
              </Container>
              <Event groupId={groupId} onCreate={getGroup} />
              {"  "}
              <LeaveGroup groupId={groupId} userId={user.id} />
            </Card.Body>
          </Card>
      </div>
    )
  }
  else if(currentUser.roleString === 'user') {
    return (
      <div className="event-top">
        <h1>{group.groupName}</h1>
        <Card.Text>{group.description}</Card.Text>
        <Card>
            <Card.Body>
              <Container>
                <div className="all-events">
                  <GroupEvents groupEvents={group.groupEvents} group={groupId}/>
                </div>
              </Container>
              <LeaveGroup groupId={groupId} userId={user.id} />
            </Card.Body>
          </Card>
      </div>
    )
  }
  else {
    return (
      <>
      hi there
      </>
    )
  }
}

function GroupEvents(props) {
  const { groupEvents, group, currentUser } = props;

  return (
    <Row>
      {groupEvents.map((event) => (
        <Col key={event.eventId}>
          <Card className="event-card">
            <Card.Title>{event.eventName}</Card.Title>
            <Badge className="Button" color="success">Going</Badge>
            <Card.Text className="event-button">
              <br></br>
              <EventDetail eventId={event.eventId} groupId={group} groupUser={currentUser}/>
            </Card.Text>
          </Card>
          <br></br>
          <br></br>
        </Col>
      ))}
    </Row>
  )
}