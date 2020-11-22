import React from 'react';
import Button from 'react-bootstrap/Button';
import {useAuth} from '../context/auth';

const userAPI = process.env.REACT_APP_API_URI;

export default function DeleteGroup(props) {
  const {groupId} = props;
  const {user} = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    const userToken = user.token;
    
    const result = await fetch(`${userAPI}/Group/${groupId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${userToken}`, 
        'Content-Type': 'application/json',
      }
    });

    if(result.ok) {
      return true;
    }
    const errors = await result.json();
    console.log(errors);

    return false;
  }

  return (
    <>
      <Button onClick={handleSubmit}>Permanently Delete Group</Button>
    </>
  )
}