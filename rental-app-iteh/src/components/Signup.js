import React, { useRef, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { register } from "../actions/auth";

function Signup(props) {
  const fNameRef = useRef();
  const lNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [loading, setLoading] = useState(false);

  const { message } = useSelector((state) => state.messageReducer);
  const dispatch = useDispatch();
  const [successful, setSuccessful] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setSuccessful(false);
    dispatch(
      register(
        fNameRef.current.value,
        lNameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value,
        usernameRef.current.value,
      )
    ).then(() => {
        console.log(message);
        props.history.push("/login");
        window.location.reload();
        setSuccessful(true);
      })
      .catch(() => setSuccessful(false));
  }
 
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={handleSubmit}>
          <Form.Group id="fName">
              <Form.Label>First name:</Form.Label>
              <Form.Control type="text" ref={fNameRef} required />
            </Form.Group>
            <Form.Group id="lName">
              <Form.Label>Last name:</Form.Label>
              <Form.Control type="text" ref={lNameRef} required />
            </Form.Group>
            <Form.Group id="username">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" ref={usernameRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}

export default Signup;
