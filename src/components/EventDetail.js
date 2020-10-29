import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../context/auth';


export default async function EventDetailsModal(props) {
  const { user } = useAuth();
  const { eventId } = props;

  const eventAPI = `https://gathering.azurewebsites.net/api/Event/${eventId}`;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // await fetch from setShow = true 

  const result = await fetch(`${eventAPI}`, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
  });

  const eventDetails = await result.json();

  console.log(eventDetails);


  return (
    <>
      <Button onClick={handleShow}>Event Details</Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>
            Details for
        </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Date: </p>
          <p>Location:</p>
          <p>Going: </p>
          <p>Host: </p>
          <p>Food: </p>
          <p>Cost: </p>
          <p>Description: </p>
          <p>Invited groups: </p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}