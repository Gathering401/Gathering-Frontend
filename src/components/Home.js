import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Tabs from './homeTabs'
import User from './User'
// import GroupCard from './GroupCard';

export default function Home() {
  return (
    <>
     <Container>
        <Row>
          <Col>
            <User />
          </Col>
          <Col xs={9}>
            <Tabs />
            {/* <GroupCard /> */}
          </Col>
        </Row>
     </Container>
    </>
  );
}