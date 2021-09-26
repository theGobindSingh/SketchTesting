import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CheckSquareFill } from "react-bootstrap-icons";
import "./ContactPage.css";

import Loading from "../Components/Loading";
import Error from "../Components/Error";
import { useMutation, gql } from "@apollo/client";

const contact = gql`
  mutation ($name: String!, $email: String!, $msg: String!) {
    createContact(
      input: { data: { name: $name, email: $email, message: $msg } }
    ) {
      contact {
        name
        message
      }
    }
  }
`;

export default function ContactPage() {
  var [NAME, setName] = useState("");
  const inputName = (inp) => {
    setName(inp.target.value);
  };
  var [EMAIL, setEmail] = useState("");
  const inputEmail = (inp) => {
    setEmail(inp.target.value);
  };
  var [MSG, setMsg] = useState("");
  const inputMsg = (inp) => {
    setMsg(inp.target.value);
  };
  const [ContactSubmit, { data, loading, error }] = useMutation(contact);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
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
              onChange={inputName}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="email mb-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Please enter your e-mail address."
              onChange={inputEmail}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="message mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              type="message"
              as="textarea"
              rows={10}
              placeholder="Please type your message."
              onChange={inputMsg}
            ></Form.Control>
          </Form.Group>
          <Button
            variant="outline-light"
            onClick={() => {
              try {
                ContactSubmit({
                  variables: {
                    name: NAME,
                    email: EMAIL,
                    msg: MSG,
                  },
                }).then(() => {
                  try {
                    if (Object.keys(data).length === 1) {
                      alert(
                        "Submitted! Thank you, " +
                          data.createContact.contact.name
                      );
                    }
                  } catch (e) {
                    console.log(e);
                  }
                  if (error) {
                    return <Error />;
                  }
                });
              } catch (e) {
                console.log(e);
              }
            }}
          >
            <span> Submit</span> <CheckSquareFill />
          </Button>
        </Form>
      </div>
    </div>
  );
}
