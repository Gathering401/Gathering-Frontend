import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import {useAuth} from '../context/auth';


const eventAPI = 'https://gathering.azurewebsites.net/api/Event';




export default function EventForm() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleSubmit(e) {
    e.preventDefault();
    const { target } = e;

    const { eventName, start, end, dayOfMonth, food, cost, location } = target.elements;

    if (!await CreateEvent(eventName.value, start.value, end.value, dayOfMonth.value, food.value, cost.value, location.value)) {
      target.reset();
    }
  }

  async function CreateEvent(eventName, start, end, dayOfMonth, food, cost, location) {
    const {user} = useAuth();
    await fetch(`${eventAPI}/Event`, {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${user.token}`, 'Content-Type': 'application/json',
      },
      body: JSON.stringify({ eventName, start, end, dayOfMonth, food, cost, location }),
    });
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
                    <option value="">N/A</option>
                    <option value="AK">Alaska</option>
                    <option value="AL">Alabama</option>
                    <option value="AR">Arkansas</option>
                    <option value="AZ">Arizona</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DC">District of Columbia</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="IA">Iowa</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MD">Maryland</option>
                    <option value="ME">Maine</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MO">Missouri</option>
                    <option value="MS">Mississippi</option>
                    <option value="MT">Montana</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="NE">Nebraska</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NV">Nevada</option>
                    <option value="NY">New York</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VA">Virginia</option>
                    <option value="VT">Vermont</option>
                    <option value="WA">Washington</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WV">West Virginia</option>
                    <option value="WY">Wyoming</option>
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
          </Form>
          
        </Modal.Body>

        <Modal.Footer>
          <Button type="submit">Create Event</Button>
        </Modal.Footer>

      </Modal>
    </>
  )
}