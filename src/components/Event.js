import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';


export default function EventForm() {
  return (

    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>
          Create an event
    </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form className="event-form">
          <Form.Group controlId="">
            <Form.Label>Event name</Form.Label>
            <Form.Control name="Event name" type="input" placeholder="Event name" />
          </Form.Group>

          <Form.Group controlId="Address">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Col md={4}>
              <Form.Group controlId="City">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="State">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
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
                <Form.Control />
              </Form.Group>
            </Col>
          </Form.Row>


          <Form.Group>
            <Form.Label>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Will be food"
              />
            </Form.Label>
          </Form.Group>

          <Form.Row>
            <Col md={6}>
              <Form.Group controlId="">
                <Form.Label>Cost</Form.Label>
                <Form.Control name="Cost" type="input" placeholder="$0.00" />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date">
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col md={6}>
            <Form.Group controlId="">
        <Form.Label>Start time</Form.Label>
        <Form.Control name="Time" type="time" placeholder="10:00" />
      </Form.Group>
            </Col>

            <Col md={6}>
            <Form.Group controlId="">
        <Form.Label>End time</Form.Label>
        <Form.Control name="Time" type="time" placeholder="10:00" />
      </Form.Group>
            </Col>
          </Form.Row>

          <Form.Group controlId="">
            <Form.Label>Description</Form.Label>
            <Form.Control name="Description" type="input" placeholder="Description" />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
      
    </Modal.Dialog>
  )
}