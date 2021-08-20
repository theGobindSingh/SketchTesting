import React from "react";

import "./Test.css";
import logo from "../Assets/sketch_logo.png";

import { Button, Image, Dropdown, Col, Row } from "react-bootstrap";
import {
  List,
  HouseFill,
  Grid3x3GapFill,
  InfoCircleFill,
  PeopleFill,
  BookmarkHeartFill,
  BookHalf,
  ChatSquareDotsFill,
} from "react-bootstrap-icons";

export default function Header() {
  return (
    <div id="header" fluid="true">
      <Image src={logo} alt="" id="header_logo"></Image>
      <div id="Header_Buttons">
        <Row md="auto">
          <Col md="auto">
            <Button
              variant="outline-light"
              id="btn_eve_head"
              onClick={() => {
                return console.log("Header Events Clicked");
              }}
            >
              Our Events
            </Button>
          </Col>
          <Col md="auto">
            <Button
              variant="outline-light"
              id="btn_team_head"
              onClick={() => {
                return console.log("Header Team Clicked");
              }}
            >
              Our Team
            </Button>
          </Col>
          <Col md="auto">
            <div>
              <Dropdown autoClose="outside" title="" id="btn_drop_head">
                <Dropdown.Toggle variant="dark">
                  <List />
                </Dropdown.Toggle>

                <Dropdown.Menu id="">
                  <Dropdown.Item href="#/" className="drop">
                    <HouseFill />
                    <span>Home</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/" className="drop">
                    <Grid3x3GapFill />
                    <span>Our Events</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/" className="drop">
                    <InfoCircleFill />
                    <span>About Us</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/" className="drop">
                    <PeopleFill />
                    <span>Our Team</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/" className="drop">
                    <BookmarkHeartFill />
                    <span>Join Us</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/" className="drop">
                    <ChatSquareDotsFill />
                    <span>Contact Us</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/" className="drop">
                    <BookHalf />
                    <span>Stories</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
