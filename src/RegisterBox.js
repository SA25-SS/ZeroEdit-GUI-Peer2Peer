// RegisterBox.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const RegisterBox = () => {
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    navigate('/login'); // Navigate to the /login route
  };
  return (
    <div style={{ backgroundColor: '#eef4fa', minHeight: '100vh' }}>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: '100vh' }}
      >
        <Row>
          <Col>
            <div
              className="p-4 shadow d-flex flex-column justify-content-center"
              style={{
                backgroundColor: '#fff',
                borderRadius: '6px',
                width: '400px',
                minHeight: '550px'
              }}
            >
              <h2
                className="text-center mb-4"
                style={{ color: '#2e86de', fontSize: '3rem', fontWeight: 'bold' }}
              >
                ZeroEdit
              </h2>
              <Form className="flex-grow-1 d-flex flex-column justify-content-center" onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formFullName">
                  <Form.Label style={{ fontSize: '1rem', fontWeight: 500 }}>Full Name:</Form.Label>
                  <Form.Control type="text" placeholder="Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label style={{ fontSize: '1rem', fontWeight: 500 }}>Username:</Form.Label>
                  <Form.Control type="text" placeholder="Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAge">
                  <Form.Label style={{ fontSize: '1rem', fontWeight: 500 }}>Age:</Form.Label>
                  <Form.Control type="number" placeholder="Age" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label style={{ fontSize: '1rem', fontWeight: 500 }}>Email:</Form.Label>
                  <Form.Control type="email" placeholder="username@email.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label style={{ fontSize: '1rem', fontWeight: 500 }}>Password:</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formConfirmPassword">
                  <Form.Label style={{ fontSize: '1rem', fontWeight: 500 }}>Confirm Password:</Form.Label>
                  <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mb-3">
                  Register
                </Button>
              </Form>
              <div className="text-center">
                <Link to="/login">Already registered? Login</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterBox;
