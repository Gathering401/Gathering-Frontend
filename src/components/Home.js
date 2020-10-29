import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import User from './User';
import Groups from './homeGroups';

export default function Home() {
  return (
    <>
     <Container>
        <Row>
          <Col>
            <User />
          </Col>
          <Col xs={9}>
            <Groups />
          </Col>
        </Row>
     </Container>
    </>
  );
}
