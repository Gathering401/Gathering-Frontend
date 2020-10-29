import React from 'react';
import logo from '../logo.svg';
import {Navbar} from 'react-bootstrap'

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
        <Navbar.Brand className="create-group">
          Create a Group
        </Navbar.Brand>
      </Navbar>
    </>
  )
}