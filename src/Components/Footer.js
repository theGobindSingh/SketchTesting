import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import Logo from "../Assets/sketch_logo.png";
import {
  Discord,
  EnvelopeFill,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container id="Footer" fluid="true">
      <div>
        <h6>Sitemap</h6>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/About">About Us</Link>
        <br></br>
        <Link to="/Events">Our Events</Link>
        <br></br>
        <Link to="/SiteInfo">Site Info</Link>
        <br></br>
      </div>
      <hr className="solid"></hr>
      <div>
        <h6>Get in touch</h6>
        <Link to="/Team">Our Team</Link>
        <br></br>
        <Link to="/Contact">Contact us</Link>
        <br></br>
        <Link to="/Join">Join us</Link>
        <br></br>
      </div>
      <hr className="solid"></hr>
      <div id="Foot_icons">
        <Row md="auto">
          <Col md="auto">
            <a
              href="mailto:sketch.srm@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <EnvelopeFill />
            </a>
          </Col>
          <Col md="auto">
            <a
              href="https://discord.gg/dfU284NNgj"
              target="_blank"
              rel="noreferrer"
            >
              <Discord />
            </a>
          </Col>
          <Col md="auto">
            <a
              href="https://www.instagram.com/srmsketch/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
          </Col>
        </Row>
        <Row md="auto">
          <Col md="auto">
            <a
              href="https://www.linkedin.com/company/sketch-srm/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
          </Col>
          <Col md="auto">
            <a
              href="https://www.youtube.com/channel/UCqI8MZ5R-Bz4ienOk2AmiUQ?sub_confirmation=1"
              target="_blank"
              rel="noreferrer"
            >
              <Youtube />
            </a>
          </Col>
          <Col md="auto">
            <a
              href="https://www.facebook.com/sketchsrm"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>
          </Col>
        </Row>
      </div>
      <hr className="solid"></hr>
      <div className="Footer_Message_Container">
        <img src={Logo} alt=""></img>
        <p className="Footer_Message">
          We are a community made to encourage our students to build their own
          profile and help them lead their own entrepreneurial organizations.
        </p>
      </div>
    </Container>
  );
}
