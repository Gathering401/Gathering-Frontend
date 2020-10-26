import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Header from './Header'
import Tabs from './homeTabs'
import User from './User'

export default function Home() {
  return (
    <>
     <Header />
     <Container>
        <Row>
          <Col>
            <User />
          </Col>
          <Col xs={9}>
            <Tabs />
          </Col>
        </Row>
     </Container>
    </>
  );
}