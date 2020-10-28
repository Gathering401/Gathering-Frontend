import React from 'react';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import Event from './Event';

export default function GroupCard() {  
  return (
    <Toast>
      <Toast.Header>
        <img src="" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Group name</strong>
        <small>Attending: </small>
      </Toast.Header>
      <Toast.Body>
      <Button variant="success">Event</Button>{' '}
      <Button variant="secondary">Event</Button>{' '}
      <Button variant="warning">Event</Button>{' '}
      <Event />{' '}
      </Toast.Body>
    </Toast>
  )
}