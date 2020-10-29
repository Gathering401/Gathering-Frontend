import React from 'react';
import logo from '../logo.svg';
import { Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Gathering
        </Navbar.Brand>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
      </Navbar>
    </>
  )
}