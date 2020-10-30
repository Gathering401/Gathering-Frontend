import React from 'react'
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
      <h3>{user === null? "First": user.username}</h3>
    </Container>
  )
}

