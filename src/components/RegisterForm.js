import React from 'react';
import { useAuth } from '../context/auth';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Register() {
    const { user, register } = useAuth();

    if (user) {
        return(<h2>You're already signed in!</h2>);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const { target } = e;
        const { FirstName, LastName, Username, Password, Email, PhoneNumber, BirthDate } = target.elements;

        if (!await register(FirstName.value, LastName.value, Username.value, Password.value, Email.value, PhoneNumber.value, BirthDate.value)) {
            target.reset();
        }
    }

    return (
        <Form className="register" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control required placeholder="Enter your first name" name="FirstName"></Form.Control>
                <Form.Label>Last Name</Form.Label>
                <Form.Control required placeholder="Enter your last name" name="LastName"></Form.Control>
                <Form.Label>User Name</Form.Label>
                <Form.Control required placeholder="Create a username" name="Username"></Form.Control>
                <Form.Label>Password</Form.Label>
                <Form.Control required placeholder="Create a password" name="Password" type="password"></Form.Control>
                <Form.Label>Email</Form.Label>
                <Form.Control required placeholder="Enter a valid email address" name="Email" type="email"></Form.Control>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control required placeholder="Enter a valid phone number" name="PhoneNumber" type="tel"></Form.Control>
                <Form.Label>Birthday</Form.Label>
                <Form.Control required name="BirthDate" type="date"></Form.Control>
            </Form.Group>
            <Button type="submit">Register</Button>
        </Form>
    )
}