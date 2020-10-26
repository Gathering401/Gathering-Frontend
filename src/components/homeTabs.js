import React from 'react';
import {Tabs ,Tab, TabContent} from 'react-bootstrap';
import Groups from './homeGroups';

export default function homeGroups() {
  return (
    <>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="groups" title="Groups">
       
        </Tab>
        <Tab eventKey="hosting" title="Hosting">
        </Tab>
      </Tabs>
    </>
  )
}