import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import {useAuth} from '../context/auth';
import states from '../data/states.json';

const userAPI = 'https://gathering.azurewebsites.net/api';

export default function EventForm(props) {
  const {groupId, onCreate} = props
  const [show, setShow] = useState(false);
  const {user} = useAuth();

  const handleClose = () => {
    setShow(false);
    onCreate&&onCreate();
  }
  const handleShow = () => setShow(true);

  async function handleSubmit(e) {
    e.preventDefault();
    const { target } = e;

    const { eventName, start, end, food, cost, address, city, state, zip, description } = target.elements;
    const newEvent = {
      eventName: eventName.value,
        start:start.value,
        end: end.value,
        food: food.value,
        cost: cost.value,
        location: address.value + " " + city.value + ", " + state.value + " " + zip.value,
        description: description.value
    }
    
    if (await CreateEvent(newEvent)) {
      handleClose();
      target.reset();
    }
  }

  async function CreateEvent(newEvent) {
    const userToken = user.token;
    const result = await fetch(`${userAPI}/Group/${groupId}/Event`, {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${userToken}`, 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEvent),
    });

    if(result.ok){
      return true;
    }
    const errors = await result.json();
    console.log(errors);

    return false;
  }

  return (
    <>
      <Button onClick={handleShow}>Add Event</Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdropClassName="static"
        keyboard={true}
      >
        <Modal.Header>
          <Modal.Title>
            Create an event
        </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form className="event-form" onSubmit={handleSubmit}>
            <Form.Group controlId="">
              <Form.Label>Event name</Form.Label>
              <Form.Control name="eventName" type="input" placeholder="Event name" />
            </Form.Group>

            <Form.Group controlId="Address">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="Address" name="address" />
            </Form.Group>

            <Form.Row>
              <Col md={4}>
                <Form.Group controlId="City">
                  <Form.Label>City</Form.Label>
                  <Form.Control placeholder="City" name="city" />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group controlId="State">
                  <Form.Label>State</Form.Label>
                  <Form.Control name="state" as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    {
                      states.map(state => (
                        <option value={state.value}>{state.name}</option>
                      ))
                    }
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group controlId="Zip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control placeholder="Zip Code" name="zip" />
                </Form.Group>
              </Col>
            </Form.Row>


            <Form.Group>
              <Form.Label>
                <Form.Check
                  type="switch"
                  name="food"
                  id="custom-switch"
                  label="Will be food"
                  defaultValue={false}
                  defaultChecked={true}
                />
              </Form.Label>
            </Form.Group>

            <Form.Row>
              <Col md={6}>
                <Form.Group controlId="">
                  <Form.Label>Cost</Form.Label>
                  <Form.Control name="cost" type="input" placeholder="$0.00" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" name="dayOfMonth">
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col md={6}>
                <Form.Group controlId="">
                  <Form.Label>Start time</Form.Label>
                  <Form.Control name="start" type="time" placeholder="10:00" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="">
                  <Form.Label>End time</Form.Label>
                  <Form.Control name="end" type="time" placeholder="10:00" />
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Group controlId="">
              <Form.Label>Description</Form.Label>
              <Form.Control name="description" type="input" placeholder="Description" />
            </Form.Group>
            <Button type="submit">Create Event</Button>
          </Form>
          
        </Modal.Body>

        <Modal.Footer>
          
        </Modal.Footer>

      </Modal>
    </>
  )
}

