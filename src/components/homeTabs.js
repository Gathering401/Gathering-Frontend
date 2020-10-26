import React from 'react';
import {Tabs ,Tab} from 'react-bootstrap';
import Groups from './homeGroups';


export default function homeTabs() {

  return (
    <>
      <Tabs className="myClass" defaultActiveKey="groups">
        <Tab className="tab" eventKey="groups" title="Groups">
          <Groups />
        </Tab>
        <Tab eventKey="hosting" title="Hosting">
        </Tab>
      </Tabs>
    </>
  )
}


