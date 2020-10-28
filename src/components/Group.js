import React, { useState, useEffect } from 'react';
import {Card, Col, Container} from 'react-bootstrap';
import { Button } from 'reactstrap';
import '../App.css'
import { useAuth } from '../context/auth';



export default function Group(props) {
    const { groupId } = props;
    const { user } = useAuth();
    const userAPI = `https://gathering.azurewebsites.net/api/Group/${groupId}`;
    const [group, setGroup] = useState([]);

  useEffect(() => {
    async function getGroup() {
      const result = await fetch(`${userAPI}`,{
        headers: {
          'Authorization': `Bearer ${user.token}`
        },
      });
      const resultBody = await result.json();
        
      return setGroup(resultBody);
    }
    getGroup();
    // eslint-disable-next-line
  },[]);
       

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{group.groupName}</Card.Title>
          <Card.Text>{group.description}</Card.Text>
          <Card.Text>{group.location}</Card.Text>
          <Container>
            <Card.Text>
              {/* <Button className="Button" color="info" pill>Invite Member</Button> */}
              <Col>
              <Button className="Button" color="info" pill>Host New Event</Button>
              </Col>
              {/* <Button className="Button" color="info" pill>Leave Group</Button> */}
            </Card.Text>
          </Container>               
      </Card.Body>
    </Card>
  </>
  )
}