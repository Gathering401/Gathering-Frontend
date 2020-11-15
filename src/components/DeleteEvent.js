import React from 'react';
import Button from 'react-bootstrap/Button';
import {useAuth} from '../context/auth';

const userAPI = process.env.REACT_APP_API_URI;

export default function DeleteEvent(props) {
  const {group, eventId, close} = props;
  const {user} = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    const userToken = user.token;
    
    console.log(group, eventId);

    const result = await fetch(`${userAPI}/Group/${group}/Event/${eventId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${userToken}`, 
        'Content-Type': 'application/json',
      }
    });

    if(result.ok) {
      close();
      window.location.reload(false);
      return true;
    }
    const errors = await result.json();
    console.log(errors);

    return false;
  }

  return (
    <>
      <Button onClick={handleSubmit}>Delete Event</Button>
    </>
  )
}