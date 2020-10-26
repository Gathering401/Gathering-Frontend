import React from 'react';
import {Tabs ,Tab} from 'react-bootstrap';


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
