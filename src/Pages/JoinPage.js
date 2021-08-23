import React from "react";
import "./JoinPage.css";
import { Button, Form } from "react-bootstrap";
import { PersonPlusFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function JoinPage() {
  return (
    <div id="JoinDiv">
      <h1>Be a part of our family!</h1>
      <p>
        We’re always on the lookout for awesome and creative minds to join our
        club to kick off your career. For a further look into who we are head to
        our <Link to="/About">about page</Link>. <br></br>
        <br></br>To send us your info fill out the form below. If you have any
        questions feel free to <Link to="/Contact">contact us</Link>.<br></br>
        <br></br>We promise that it will be a super chill interview.
      </p>
      <div className="JoinFormDiv">
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
          <Form.Group className="year_section mb-3">
            <Form.Label>Year & Section</Form.Label>
            <Form.Control placeholder="Which year you are in and what's your class section?"></Form.Control>
          </Form.Group>
          <Form.Group className="RA mb-3">
            <Form.Label>Registration Number</Form.Label>
            <Form.Control placeholder="Please enter your SRM Registration (RA) number."></Form.Control>
          </Form.Group>
          <Form.Group className="contact mb-3">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="tel"
              pattern="\d*"
              size="10"
              placeholder="Please enter your primary contact number."
            ></Form.Control>
          </Form.Group>
          <Form.Group className="hobbies mb-3">
            <Form.Label>
              What are your hobbies? Do those hobbies differ from your passion?
            </Form.Label>
            <Form.Control
              type="message"
              as="textarea"
              rows={7}
              placeholder="Be creative and descriptive."
            ></Form.Control>
          </Form.Group>
          <Form.Group className="strength_weakness mb-3">
            <Form.Label>What are your strengths and weaknesses?</Form.Label>
            <Form.Control
              type="message"
              as="textarea"
              rows={7}
              placeholder="Be creative and descriptive."
            ></Form.Control>
          </Form.Group>
          <Form.Group className="domain mb-3">
            <Form.Label>
              Kindly choose among the following domains which fit the most to
              your passion.
            </Form.Label>
            <Form.Select>
              <option value="Media">Media</option>
              <option value="RND">Research & Development</option>
              <option value="Design">Designing</option>
              <option value="Content">Content writing</option>
              <option value="OrgPR">Organizing & PR</option>
              <option value="Game">Gaming</option>
            </Form.Select>
          </Form.Group>
          <Button
            variant="outline-light"
            onClick={() => {
              return alert("Submitted!");
            }}
          >
            <span> Submit</span> <PersonPlusFill />
          </Button>
        </Form>
      </div>
    </div>
  );
}
