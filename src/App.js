import React from 'react';

import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
function App() {
  return (
    <div className="App">
      <Form  className="sign-up-form">
        <h1>Sign Up</h1>
        <center>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control className="email" type="email" placeholder="Enter email" / >
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control className="password" type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </center>
</Form>
    </div>
  );
}

export default App;
