import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
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
    <Container id="FooterMobile" fluid="true">
      <div>
        <h6>Get in touch</h6>
        <Link to="/Team">Our Team</Link>
        <br></br>
        <Link to="/Contact">Contact us</Link>
        <br></br>
        <Link to="/Join">Join us</Link>
        <br></br>
      </div>

      <div id="Foot_icons">
        <div className="FooterMobile_forFlex">
          <a
            href="mailto:sketch.srm@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <EnvelopeFill />
          </a>
          <br></br>
          <a
            href="https://discord.gg/dfU284NNgj"
            target="_blank"
            rel="noreferrer"
          >
            <Discord />
          </a>
          <br></br>
          <a
            href="https://www.instagram.com/srmsketch"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>
        </div>
        <div className="FooterMobile_forFlex">
          <a
            href="https://www.linkedin.com/company/sketch-srm/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <br></br>
          <a
            href="https://www.facebook.com/sketchsrm"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook />
          </a>
          <br></br>
          <a
            href="https://www.youtube.com/channel/UCqI8MZ5R-Bz4ienOk2AmiUQ?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
          >
            <Youtube />
          </a>
        </div>
      </div>
    </Container>
  );
}
