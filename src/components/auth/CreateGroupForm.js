import React from 'react';
//import { useAuth } from '../../context/auth';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Group() {
    function handleSubmit(e) {

        // e.preventDefault();
        // const { target } = e;
        // const { groupName, groupLocation, groupDescription } = target.elements;

        // if (!await groupCreate(groupName.value, groupLocation.value, groupDescription.value)) {
        //     target.reset();
        // }
    }

    // const { user } = useAuth();

    return (
        <Form className="groupCreate">
            <Form.Label>Group Name</Form.Label>
            <Form.Control required placeholder="Give your group a name" name="groupName"></Form.Control>
            <Form.Label>Location</Form.Label>
            <Form.Control required placeholder="Enter a location for your group" name="groupLocation"></Form.Control>
            <Form.Label>Description</Form.Label>
            <Form.Control required placeholder="Describe your group" name="groupDescription"></Form.Control>
            <Button type="submit" onSubmit={handleSubmit}>Create Group</Button>
        </Form>
    );
};
