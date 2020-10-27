import React, {useState} from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function EventDetailsModal() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    <Button onClick={handleShow}>Don't Click...... please do not..... danger</Button>

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
        <p>Location: </p>
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