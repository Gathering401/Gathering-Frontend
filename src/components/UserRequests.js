import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAuth } from '../context/auth';

const userAPI = process.env.REACT_APP_API_URI;

export default function SeeUsers(props) {
  const { user } = useAuth();
  const { group } = props;
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  const respondToRequest = async (e) => {
    e.preventDefault();

    const values = e.target.value.split(' ');
    const status = values[0];
    const userId = values[1];

    const result = await fetch(`${userAPI}/Group/${group.groupId}/User/${userId}/Request/${status}`, {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${user.token}`,
        'Content-Type': 'application/json'
      }
    });
    
    handleClose();

    if(result.ok) {
      return true;
    }
    const errors = await result.json();
    console.log(errors, `${userAPI}/Group/${group.groupId}/User/${userId}/Request/${status}`);

    return false;
  }

  console.log(group.requestsToJoin);
  return (
    <>
      <Button onClick={handleShow}>Join Requests</Button>
      
      <Modal
        show={show}
        onHide={handleClose}
        backdropClassName="static"
        keyboard={true}
      >
        <Modal.Header>
          <Modal.Title>
            {group.groupName} Join Requests
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {group.requestsToJoin.map(request => (
            <div key={request.userId}>
              <h2>{request.firstName} {request.lastName}</h2>
              <h5>{request.userName}</h5>
              <Button value={`2 ${request.userId}`} onClick={respondToRequest}>Accept</Button>
              <Button value={`1 ${request.userId}`} onClick={respondToRequest}>Reject</Button>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </>
  )
}