import React, { useState, useEffect } from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import { Badge } from 'reactstrap';
import '../App.css'
import { useAuth } from '../context/auth';
import Event from './Event';
import EventDetail from './EventDetail'
import {Link} from 'react-router-dom';


export default function HomeGroups() {
  const { user } = useAuth();
  const userAPI = 'https://gathering.azurewebsites.net/api/Group';
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    async function getGroups() {

      const result = await fetch(`${userAPI}`, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        },
      });
      const resultBody = await result.json();

      return setGroups(resultBody);
    }
    getGroups();
    // eslint-disable-next-line
  }, [user]);

  console.log(groups);

  return (
    <Row>
      {groups.map((group) => (
        <Card className="group-card">
          <Card.Body>
       