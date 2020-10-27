import React from 'react';
import Form from 'react-bootstrap/Form';
import TimePicker from 'react-bootstrap-time-picker';


export default function EventForm() {
  return (
    <Form className="event-form">
      <h5>Create an event</h5>
      <Form.Group controlId="">
        <Form.Label>Event name</Form.Label>
        <Form.Control name="Event name" type="input" placeholder="Event name" />
      </Form.Group>

      <Form.Group>
        <Form.Label>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Will be food"
          />
        </Form.Label>
      </Form.Group>

      <Form.Group controlId="Address">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Form.Row>
        <Form.Group controlId="City">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group controlId="State">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="Zip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="">
        <Form.Label>Cost</Form.Label>
        <Form.Control name="Cost" type="input" placeholder="$0.00" />
      </Form.Group>

      <Form.Group controlId="">
        <Form.Label>Start time</Form.Label>
        <TimePicker start="10:00" end="21:00" step={30} />
      </Form.Group>

      <Form.Group controlId="">
        <Form.Label>End time</Form.Label>
        <Form.Control name="Time" type="time" placeholder="10:00" />
      </Form.Group>

      <Form.Group controlId="">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date">
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="">
        <Form.Label>Description</Form.Label>
        <Form.Control name="Description" type="input" placeholder="Description" />
      </Form.Group>
    </Form>
  )
}