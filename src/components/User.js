import React, {useEffect, useState} from 'react'
import {Container, Figure} from 'react-bootstrap'
import logo from '../logo.svg';
import {useAuth} from '../context/auth'



export default function User() {
  const {user} = useAuth();

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

