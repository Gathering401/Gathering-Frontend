import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../context/auth';
import DeleteEvent from './DeleteEvent';

export default function EventDetailsModal(props) {
  const { user } = useAuth();
  const { eventId, groupId } = props;

  const eventAPI = `${process.env.REACT_APP_API_URI}/Event/${eventId}`;

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
              <p>Description: {eventDetails.description ? eventDetails.description : "No details provided"}</p>
              <p>Date: {`${eventMonth}/${eventDate}/${eventYear}`}</p>
              <p>Location: {eventDetails.location}</p>
              <p>Food: {eventDetails.food ? "Yes" : "No"}</p>
              <p>Cost: {eventDetails.cost === 0 ? "Free!" : "$" + eventDetails.cost}</p>
              <p>Invited: {eventDetails.attending.length} Gatherers</p>
              <p>{eventDetails.eventHost ? `Host: ${eventDetails.eventHost}` : ""}</p>
          </Modal.Body>
          <Modal.Footer>
            <DeleteEvent eventId={eventDetails.eventId} group={groupId} close={handleClose}/>
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
