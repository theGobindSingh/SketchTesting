import React from "react";

import "./Header.css";
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
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div id="header" fluid="true">
      <Link to="/">
        <Image src={logo} alt="" id="header_logo"></Image>
      </Link>
      <div id="Header_Buttons">
        <Row md="auto">
          <Col md="auto" id="btnHeadCol1">
            <Link to="/Events">
              <Button variant="outline-light" id="btn_eve_head">
                Our Events
              </Button>
            </Link>
          </Col>
          <Col md="auto" id="btnHeadCol2">
            <Link to="/Team">
              <Button variant="outline-light" id="btn_team_head">
                Our Team
              </Button>
            </Link>
          </Col>
          <Col md="auto">
            <div>
              <Dropdown autoClose="outside" title="" id="btn_drop_head">
                <Dropdown.Toggle variant="dark">
                  <List />
                </Dropdown.Toggle>

                <Dropdown.Menu id="btn_drop_down_head">
                  <Dropdown.Item className="drop">
                    <Link to="/">
                      <HouseFill />
                      <span>Home</span>
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item className="drop">
                    <Link to="/Events">
                      <Grid3x3GapFill />
                      <span>Our Events</span>
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item className="drop">
                    <Link to="/About">
                      <InfoCircleFill />
                      <span>About Us</span>
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item className="drop">
                    <Link to="/Team">
                      <PeopleFill />
                      <span>Our Team</span>
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item className="drop">
                    <Link to="/Join">
                      <BookmarkHeartFill />
                      <span>Join Us</span>
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item className="drop">
                    <Link to="/Contact">
                      <ChatSquareDotsFill />
                      <span>Contact Us</span>
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item className="drop">
                    <Link to="/Stories">
                      <BookHalf />
                      <span>Stories</span>
                    </Link>
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
