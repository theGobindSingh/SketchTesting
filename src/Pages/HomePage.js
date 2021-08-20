import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { ArrowBarRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import DesignAni from "../Assets/Animations/design.json";
import DeliverAni from "../Assets/Animations/deliver.json";
import DevelopAni from "../Assets/Animations/develop.json";

import "./HomePage.css";

export default function HomePage() {
  return (
    <div id="HomePageDiv">
      <div className="HomeIntroDiv">
        <div className="HomeIntroDivFM">
          <h1 className="Home_intro">
            We help our student community to rethink imagination, the
            perspective of choice and the complexity of decision through our
            workshops & events.
          </h1>
          <br></br>
        </div>
        <div className="HomeIntroDivFM">
          <p className="HomeIntroDiv">
            We are on a mission to get our student community to do design
            thinking Sketch Club is a Technical and Design Club of SRM IST
            Ramapuram, that conducts various workshops, technical events and
            mentorship programmes for students and members.
          </p>
        </div>
        <div className="HomeIntroDivFM">
          <Link to="/About">
            <Button variant="outline-light">
              Explore Us <ArrowBarRight />
            </Button>
          </Link>
        </div>
      </div>
      <h3>Our Workshops & Events Empower You to: </h3>
      <div className="HomeAnimations">
        <Row className="MainRow">
          <Col className="Col1">
            <h4>Design</h4>
            <Lottie animationData={DesignAni} loop></Lottie>
          </Col>
          <Col className="Col2">
            <h4>Develop</h4>
            <Lottie animationData={DevelopAni} loop></Lottie>
          </Col>
          <Col className="Col3">
            <h4>Deliver</h4>
            <Lottie animationData={DeliverAni} loop></Lottie>
          </Col>
        </Row>
      </div>
    </div>
  );
}
