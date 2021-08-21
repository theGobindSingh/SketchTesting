import React from "react";
import "./SiteInfo.css";

import bslogo from "../Assets/BS_logo.png";
import suilogo from "../Assets/SemanticUI_logo.png";
import bootREACTlogo from "../Assets/react_bootstrap_logo.png";
import StrapiLogo from "../Assets/strapi_logo.png";

import HCJani from "../Assets/Animations/HTML_CSS_JS.json";
import REACTani from "../Assets/Animations/ReactLogo.json";
import LOTTIEani from "../Assets/Animations/Lottie.json";
import SOFani from "../Assets/Animations/StackOverFlow.json";
import NodeJSani from "../Assets/Animations/nodeJS.json";
import Googleani from "../Assets/Animations/GoogleLogo.json";

import { Col, Row } from "react-bootstrap";
import Lottie from "lottie-react";

export default function SiteInfo() {
  return (
    <div id="SiteInfo">
      <div id="SiteInfoHead">
        <h3>This website is inspired and powered by:</h3>
      </div>
      <div id="SiteInfoAnis">
        <Row>
          <Col>
            <h4>HTML, CSS & JavaScript</h4>
            <Lottie animationData={HCJani} loop />
          </Col>
          <Col>
            <h4>React</h4>
            <Lottie animationData={REACTani} loop></Lottie>
          </Col>
          <Col>
            <h4>Bootstrap</h4>
            <div>
              <img src={bslogo} alt="Bootstrap Logo"></img>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Lottie Animations</h4>
            <Lottie animationData={LOTTIEani} loop></Lottie>
          </Col>
          <Col>
            <h4>Strapi: A Headless CMS</h4>
            <div>
              <img src={StrapiLogo} alt="Strapi Logo"></img>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>NodeJS</h4>
            <Lottie animationData={NodeJSani} loop></Lottie>
          </Col>
          <Col>
            <h4>Stack Overflow (Obviously!)</h4>
            <Lottie animationData={SOFani} loop></Lottie>
          </Col>
          <Col>
            <h4>Google: Fonts & Material UI</h4>
            <Lottie animationData={Googleani} loop></Lottie>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>React-Bootstrap Framework</h4>
            <div>
              <img
                src={bootREACTlogo}
                class="img"
                alt="Semantic UI React Logo"
              ></img>
            </div>
          </Col>
          <Col>
            <h4>Semantic UI</h4>
            <div>
              <img src={suilogo} class="img" alt="Semantic UI React Logo"></img>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
