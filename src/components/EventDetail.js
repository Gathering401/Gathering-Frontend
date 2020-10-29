import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../context/auth';

export default function EventDetailsModal(props) {
  const { user } = useAuth();
  const { eventId } = props;

  const eventAPI = `https://gathering.azurewebsites.net/api/Event/${eventId}`;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [eventDetails, setEventDetails] = useState(null);

  async function handleShow() {
    const result = await fetch(`${eventAPI}`, {
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
    });
    const responseBody = await result.json();
    setEventDetails(responseBody);

    console.log(eventDetails);

    return setShow(true);
  }

  if (eventDetails) {
    let date = new Date(eventDetails.start);
    let eventYear = date.getYear() + 1900;
    let eventMonth = date.getMonth() + 1;
    let eventDate = date.getDate();
    
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
              Details for {eventDetails.eventName}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <ul>
              <li>Description: {eventDetails.description ? eventDetails.description : "No details provided"}</li>
              <li>Date: {`${eventMonth}/${eventDate}/${eventYear}`}</li>
              <li>Location: {eventDetails.location}</li>
              <li>Food: {eventDetails.food ? "Yes" : "No"}</li>
              <li>Cost: {eventDetails.cost === 0 ? "Free!" : "$" + eventDetails.cost}</li>
              <li>Invited: {eventDetails.attending.length} Gatherers</li>
              <li>Host: </li>
            </ul>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }

  else return (
    <>
      <Button onClick={handleShow}>Event Details</Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
