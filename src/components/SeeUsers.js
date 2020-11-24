import React, { useState } from 'react';
import RemoveUser from './RemoveUser';
import ChangeRole from './ChangeRole';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function SeeUsers(props) {
  const { group, currentRole } = props;
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Button onClick={handleShow}>All Users</Button>
      
      <Modal
        show={show}
        onHide={handleClose}
        backdropClassName="static"
        keyboard={true}
      >
        <Modal.Header>
          <Modal.Title>
            {group.groupName} Users
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {group.groupUsers.map(groupUser => (
            <div key={`${groupUser.user.id} ${groupUser.group.id}`}>
              <h4>{`${groupUser.user.firstName} ${groupUser.user.lastName}`}</h4>
              <h4>Username: {groupUser.user.userName}</h4>
              <h5>Role: {groupUser.roleString}</h5>
              <RemoveUser groupUser={groupUser} currentRole={currentRole}/>
              <ChangeRole groupUser={groupUser} currentRole={currentRole}/>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </>
  )
}