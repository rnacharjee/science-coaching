import React from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="container ">
      <div className="d-flex justify-content-center">
        <h2 className="text-primary">Login / Sign Up</h2>
      </div>
      <div className="row ">
        <Form className="col-md-6 col-sm-12 m-auto p-4 m-4 ">
          <Form.Group className="mb-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
      <div className="col-md-6 col-sm-12 m-auto p-4 m-4 ">
        <h3 className="text-primary">Subscribe for Newsletter</h3>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              Get daily News and Updates
            </Form.Text>
          </Form.Group>
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
