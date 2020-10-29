import React, { useState, useEffect, useCallback } from 'react';
import {Card, Col, Container} from 'react-bootstrap';
import '../App.css'
import { useAuth } from '../context/auth';
import Event from './Event';
import AddUser from './GroupsForm'



export default function Group(props) {
  const { groupId } = props;
  const { user } = useAuth();
  const userAPI = `https://gathering.azurewebsites.net/api/Group/${groupId}`;
  const [group, setGroup] = useState({});
  
  const getGroup = useCallback( async function getGroup() {
    if(!user) {
      setGroup({})
      return;
    }
    const result = await fetch(`${userAPI}`,{
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
    });
    const resultBody = await result.json();
    return setGroup(resultBody);
  },[user,userAPI])

  useEffect(() => {
    getGroup();
  },[getGroup]);

  if(!group.groupEvents) {
    return(
      <>
      </>
    )
  }
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{group.groupName}</Card.Title>
          <Card.Text>{group.description}</Card.Text>
          <Card.Text>{group.location}</Card.Text>
          <Container>
            <Card.Text>
              <Col>
              </Col>
              <GroupEvents groupEvents={group.groupEvents} />
            </Card.Text>
          </Container>               
      </Card.Body>
    </Card>

    <Event groupId={groupId} onCreate={getGroup}/>
    <AddUser groupId={groupId}/>
  </>
  )
}

function GroupEvents(props) {
  const {groupEvents} = props;

  return (
    <>
      {groupEvents.map((event) => (
        <div>
          <h3>{event.eventName}</h3>
        </div>
      ))}
    </>
  )
}