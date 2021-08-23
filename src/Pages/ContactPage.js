import React from "react";
import { Button, Form } from "react-bootstrap";
import { CheckSquareFill } from "react-bootstrap-icons";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div id="ContactDiv">
      <h1>Feel free to contact us.</h1>
      <p>
        We are a Technical and Design Club of SRM IST Ramapuram, that conducts
        various workshops, technical events and mentorship programmes for
        students and members.<br></br>
        <br></br>
        We are and always will be open to all queries or complaints. Feel free
        to reach out and let your heart out. We're also very good listeners.
      </p>
      <div className="ContactFormDiv">
        <Form>
          <Form.Group className="name mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Please enter your full name."
            ></Form.Control>
          </Form.Group>
          <Form.Group className="email mb-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Please enter your e-mail address."
            ></Form.Control>
          </Form.Group>
          <Form.Group className="message mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              type="message"
              as="textarea"
              rows={10}
              placeholder="Please type your message."
            ></Form.Control>
          </Form.Group>
          <Button variant="outline-light">
            <span> Submit</span> <CheckSquareFill />
          </Button>
        </Form>
      </div>
    </div>
  );
}
