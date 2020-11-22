import React, { useState, useCallback, useEffect } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useAuth } from '../context/auth';

export default function SeeUsers(props) {
  const { group } = props;
  const user = useAuth();
  const userAPI = `${process.env.REACT_APP_API_URI}`;

  async function seeUsers(e) {
    e.preventDefault();
    
  }

  return (
    <Container>
      <Button onClick={seeUsers}/>
    </Container>
  )
}