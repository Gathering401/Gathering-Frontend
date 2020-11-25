import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useAuth } from '../context/auth';

const userAPI = process.env.REACT_APP_API_URI;

export default function SearchGroups() {
  const { user } = useAuth();
  const [groups, setGroups] = useState([]);
  const [show, setShow] = useState(false);
  const [searchFor, setSearchFor] = useState('');
  const [details, setDetails] = useState({});
  const [detailsShow, setDetailsShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSearchFor(e.target.elements.groupSearch.value);
    const search = e.target.elements.groupSearch.value;

    const results = await fetch(`${userAPI}/Group/Search/${search}`, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
    const searchResults = await results.json();

    setShow(true);
    await setGroups(searchResults);
  };

  const handleListClose = () => setShow(false);
  const handleDetailsClose = () => {
    setDetailsShow(false);
    setShow(true);
  }

  const requestJoin = async (e) => {
    e.preventDefault();
  }
  
  async function showDetails(e) {
    e.preventDefault();

    const groupId = e.target.value;
    const groupResponse = await fetch(`${userAPI}/Group/${groupId}`, {
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
    const group = await groupResponse.json();
    console.log(group);
    setShow(false);
    setDetailsShow(true);
    return setDetails(group);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Control name="groupSearch" className="group-search" type="input" placeholder="Search for groups" required={true}/>
        <Button type="submit" style={{display: 'none'}}></Button>
      </Form>

      <Modal
        show={show}
        onHide={handleListClose}
        backdropClassName="static"
        keyboard={true}
      >
        
        <Modal.Header>
          <Modal.Title>
            Groups matching {searchFor}:
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          {groups.map(group => (
            <div key={group.groupId} className="search-results">
              <h4>{group.groupName}</h4>
              <Button value={group.groupId} onClick={requestJoin}>Request to Join</Button>
              <Button value={group.groupId} onClick={showDetails}>Details</Button>
            </div>
          ))}
        </Modal.Body>

      </Modal>

      <Modal
        show={detailsShow}
        onHide={handleDetailsClose}
        backdropClassName="static"
        keyboard={false}
      >

        <Modal.Header>
          <Modal.Title>
            <h2>{details.groupName}</h2>
            <h4>Location: {details.location}</h4>
            <p>{details.description}</p>
          </Modal.Title>
        </Modal.Header>

      </Modal>
    </>
  )
}