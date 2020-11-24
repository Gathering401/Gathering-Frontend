import React from 'react';
import { Button, Form } from 'react-bootstrap';
import {useAuth} from '../context/auth';

const userAPI = process.env.REACT_APP_API_URI;

export default function ChangeRole(props) {
  const { groupUser, currentRole } = props;
  const { user } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    const { target } = e;

    const { role } = target.elements;
    const newRole = {
      groupId: groupUser.groupId,
      userId: groupUser.user.id,
      role: role.value
    };
    
    if (await ChangeUserRole(newRole)) {
      target.reset();
    };
  }

  async function ChangeUserRole(newRole) {
    const userToken = user.token;
    const result = await fetch(`${userAPI}/GroupUser/${groupUser.groupId}/User/${groupUser.user.id}`, {
      method: 'put',
      headers: {
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRole),
    });

    if(result.ok){
      return true;
    }
    const errors = await result.json();
    console.log(errors);

    return false;
  }

  if(currentRole === 'owner' || (currentRole === 'admin' && (groupUser.roleString === 'user' || groupUser.roleString ==='creator'))) {
    return (
      <>
        <Form className="role-form" onSubmit={handleSubmit}>
          <Form.Control name="role" as="select" defaultValue={groupUser.roleString}>
            <option value="3">Owner</option>
            <option value="2">Admin</option>
            <option value="1">Creator</option>
            <option value="0">User</option>
          </Form.Control>
          <Button type="submit">Change Role</Button>
        </Form>
      </>
    )
  }
  else {
    return (
      <>
      </>
    )
  }
}