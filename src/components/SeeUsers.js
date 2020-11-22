import React, { useState, useCallback, useEffect } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useAuth } from '../context/auth';

export default function SeeUsers(props) {
  const { group } = props;
  const user = useAuth();
  const userAPI = `${process.env.REACT_APP_API_URI}`;
  const [showUsers, setShowUsers] = useState(false);

  async function seeUsers(e) {
    e.preventDefault();
    setShowUsers()
  }

  return (
    <Container>
      <Button onClick={seeUsers}>All Users</Button>
      <UsersList groupUsers={group.groupUsers}/>
    </Container>
  )
}

function UsersList(props) {
  const { groupUsers } = props;

  return (
    <>
      {
        groupUsers.map(user => {
          console.log(user);
          <Row>
            <Card>
              <Card.Text>{user}</Card.Text>
            </Card>
          </Row>
        })
      }
    </>
  )
}