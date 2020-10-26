import React from 'react'
import {Container, Figure} from 'react-bootstrap'
import logo from '../logo.svg';

export default function User() {
  return (
    <Container>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={logo}
        />
      </Figure>
      <h3>First</h3>
      <h2>Last</h2>

    </Container>
  )
}