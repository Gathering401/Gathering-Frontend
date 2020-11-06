import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {useAuth} from '../context/auth';

const userAPI = process.env.API_URI;

export default function AddUser(props) {
  const {groupId} = props
  const [show, setShow] = useState(false);
  const {user} = useAuth();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleSubmit(e) {
    e.preventDefault();
    const { target } = e;
    const { invitedUser } = target.elements;
    const newUser = invitedUser.value
    if (!await AddUser(newUser)) {
      target.reset();
    }
  }

  async function AddUser(invitedUser) {
    const userToken = user.token;
    const result = await fetch(`${userAPI}/Group/${groupId}/User/${invitedUser}`, {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${userToken}`, 
      },
    });
    const resultBody = await result
    console.log(resultBody)
    handleClose();
  }

  return (
    <>
      <Button onClick={handleShow}>Add User</Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdropClassName="static"
        keyboard={true}
      >
        <Modal.Header>
          <Modal.Title>
            Add a User
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="event-form" onSubmit={handleSubmit}>
            <Form.Group controlId="">
              <Form.Label></Form.Label>
              <Form.Control name="invitedUser" type="input" placeholder="User Id" />
            </Form.Group>
            <Button type="submit">Add User</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  )
}