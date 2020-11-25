import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchGroups from './SearchGroups';
//import User from './User';
import Groups from './Groups';

export default function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            {/* <User /> */}
          </Col>
          <Col xs={12}>
            <Groups />
          </Col>
        </Row>
      </Container>
      <SearchGroups />
    </>
  );
}
