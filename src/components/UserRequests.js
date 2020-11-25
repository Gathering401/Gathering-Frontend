import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function SeeUsers(props) {
  const { group } = props;
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

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
            <div key={`${request.user.id} ${request.group.id}`}>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </>
  )
}