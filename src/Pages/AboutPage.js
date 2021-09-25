import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "./AboutPage.css";
import { PersonPlusFill } from "react-bootstrap-icons";
import Lottie from "lottie-react";
import DesignAni from "../Assets/Animations/design_old.json";
import DeliverAni from "../Assets/Animations/deliver_old.json";
import DevelopAni from "../Assets/Animations/develop_old.json";

export default function AboutPage() {
  return (
    <div id="AboutUsDiv">
      <h1>We're Sketch!</h1>
      <br></br>
      <div className="FM">
        <p>
          We are a Technical and Design Club of SRM IST Ramapuram, that conducts
          various workshops, technical events and mentorship programmes for
          students and members.
          <br></br>
          <br></br>
          When Sketch was made, the idea was simple: to encourage our members to
          build their profile and help them lead their entrepreneurial
          organizations. We, at Sketch, have on our sleeves the expertise of
          graphic designing, web development, content writing, UI & UX and
          marketing. As we grow, our dedication to building an exceptional
          experience for our members is all we look forward to.
        </p>
      </div>
      <div className="FM">
        <Link to="/Join">
          <Button variant="outline-light" id="btn_eve_head">
            Join us <PersonPlusFill fontSize="20px" />
          </Button>
        </Link>
      </div>
      <div className="FM D">
        <div className="AboutInfo">
          <div className="AboutInfoHead">
            <h1>Design</h1>
          </div>
          <div className="AboutInfoBody">
            <p>
              We are on a mission to get our student community to do design
              thinking, by conducting workshops and contests for students to be
              around like-minded individuals who are passionate about designing.
              We not only teach graphic designing but also introduce our fellow
              juniors to UI (User Interface) / UX (User Experience) designing by
              mentoring them on how the importance of UI and UX Design becomes
              more crucial as the first impression and brand recognition from
              small startups to giant technology firms, with the help of
              open-sourced UI/UX design and collaboration tools.
            </p>
          </div>
        </div>
        <br></br>
        <Lottie className="AboutAni" animationData={DesignAni} />
      </div>
      <div className="FM D">
        <Lottie className="AboutAni FOR_ALL" animationData={DevelopAni} />

        <div className="AboutInfo R">
          <div className="AboutInfoHead">
            <h1>Develop</h1>
          </div>
          <div className="AboutInfoBody">
            <p>
              We organize hands-on workshops and challenging contests on various
              web and software tools and technologies for our fellow students.
              We help them to grow their knowledge in a peer-to-peer learning
              environment and gain them the roadmap to build solutions for
              present and future problem-solving. We empower our club members to
              be hosts and support them in organizing workshops. We also partner
              with technology firms, startups and other student communities to
              organize workshops.
            </p>
          </div>
        </div>
        <Lottie
          className="AboutAni ONLY_FOR_PHONE"
          animationData={DevelopAni}
        />
      </div>
      <div className="FM D">
        <div className="AboutInfo">
          <div className="AboutInfoHead">
            <h1>Deliver</h1>
          </div>
          <div className="AboutInfoBody">
            <p>
              We engage our student community to deliver their creativity and
              knowledge by associating them with our college's cultural fests
              and hackathons. We encourage our members to transform their ideas
              and innovations into startups by connecting them with our Alumnus
              who has established their startups. Our club has five startups of
              its own.
            </p>
          </div>
        </div>
        <br></br>
        <Lottie className="AboutAni" animationData={DeliverAni} />
      </div>
    </div>
  );
}
