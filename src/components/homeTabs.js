import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Groups from './homeGroups';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


export default function homeTabs() {

  return (
    <Container>
      <Row>
        <Col>
          <Tabs className="myClass" defaultActiveKey="groups">
            <Tab className="tab" eventKey="groups" title="Groups">
            <Groups />
            </Tab> 
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}


