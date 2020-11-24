import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from '../context/auth';

const userAPI = process.env.REACT_APP_API_URI;

export default function RemoveUser(props) {
  const { groupId, groupUser, currentRole } = props;
  const { user } = useAuth();

  async function removeUser(e) {
    e.preventDefault();
    const userToken = user.token;
    
    const result = await fetch(`${userAPI}/Group/${groupId}/User/${groupUser.user.id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${userToken}`, 
        'Content-Type': 'application/json',
      }
    });

    if(result.ok) {
      window.location.reload();
      return true;
    }
    const errors = await result.json();
    console.log(errors);

    return false;
  }

  if(currentRole === 'owner' || (currentRole === 'admin' && (groupUser.roleString === 'user' || groupUser.roleString === 'creator'))) {
    return (
      <Button onClick={removeUser}>Remove User</Button>
    )
  }
  else {
    return (
      <>
      </>
    )
  }
}