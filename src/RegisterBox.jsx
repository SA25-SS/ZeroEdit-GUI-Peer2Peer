// RegisterBox.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import CryptoJS from 'crypto-js';

import { clearAuthToken } from './utils/storage';

const RegisterBox = () => {

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Collect form data
    const fullName = event.target.formFullName.value;
    const username = event.target.formUsername.value;
    const age = event.target.formAge.value;
    const email = event.target.formEmail.value;
    const password = event.target.formPassword.value;
    const confirmPassword = event.target.formConfirmPassword.value;

    // Validate passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Hash the password using SHA-256
    // const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);

    try {
      // Send registration data to the backend
      const response = await fetch('http://15.207.110.230/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          username,
          age,
          email,
          password: password, // Send the hashed password
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful:', data);
        alert('Registration successful. Redirecting to login...');
        navigate('/login'); // Navigate to the login page
      } else {
        const errorData = await response.json();
        console.error('Registration failed:', errorData.message);
        alert(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div style={{ backgroundColor: '#eef4fa', minHeight: '100vh' }}>
      {clearAuthToken()}
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
