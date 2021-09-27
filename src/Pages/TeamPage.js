import React from "react";
import "./TeamPage.css";
import Loading from "../Components/Loading";
import Error from "../Components/Error";

import { useQuery, gql } from "@apollo/client";
import { Card, Col, Row } from "react-bootstrap";
import { EnvelopeFill, Instagram } from "react-bootstrap-icons";
import { IoBodyOutline } from "react-icons/io5";

const getAlumni = gql`
  query Alumni {
    clubRole(id: 1) {
      Role
      members(sort: "Name") {
        Name
        id
        InstaID
        Email
        ProfilePicture {
          url
        }
      }
    }
  }
`;

const getManagers = gql`
  query Managers {
    clubRole(id: 10) {
      members(sort: "Name") {
        Name
        id
        ProfilePicture {
          url
        }
        InstaID
        Email
        club_roles {
          Role
        }
      }
    }
  }
`;

const getOManagers = gql`
  query Managers {
    clubRole(id: 11) {
      members(sort: "Name") {
        Name
        id
        ProfilePicture {
          url
        }
        InstaID
        Email
        club_roles {
          Role
        }
      }
    }
  }
`;

const getMembers = gql`
  query Members {
    clubRole(id: 14) {
      members(sort: "Name") {
        Name
        id
        ProfilePicture {
          url
        }
        InstaID
        Email
        club_roles {
          Role
        }
      }
    }
  }
`;

export default function TeamPage() {
  //const { loading, error, data } = useQuery(getAlumni);

  const Team = () => {
    const res1 = useQuery(getAlumni);
    const res2 = useQuery(getManagers);
    const res3 = useQuery(getOManagers);
    const res4 = useQuery(getMembers);
    return [res1, res2, res3, res4];
  };

  const [
    { loading: loading1, error: error1, data: Alumini },
    { loading: loading2, error: error2, data: Managers },
    { loading: loading3, error: error3, data: OManagers },
    { loading: loading4, error: error4, data: Members },
  ] = Team();

  if (loading1 || loading2 || loading3 || loading4) {
    return <Loading />;
  }

  if (error1 || error2 || error3 || error4) {
    return <Error />;
  }

  return (
    <div id="TeamPageDIV">
      <div className="teamOurBody" style={{ display: "flex" }}>
        <h1>Our Body</h1>
        <IoBodyOutline className="bodyIcon" />
      </div>
      <div className="Managers Team">
        <h2>The Head</h2>
        <Row sm={2} md={4} className="Managers">
          {Managers.clubRole.members.map((Alum, index) => (
            <Col key={Alum.id}>
              <Card className="card">
                <Card.Img
                  variant="top"
                  alt="Card image"
                  src={Alum.ProfilePicture.url}
                />
                <Card.ImgOverlay className="card-img-overlay d-flex flex-column justify-content-end">
                  <Card.Title style={{ paddingLeft: "7px" }}>
                    {Alum.Name}
                  </Card.Title>
                  <p style={{ fontSize: "0.9rem", paddingLeft: "5%" }}>
                    {Managers.clubRole.members[index].club_roles[0].Role}
                  </p>
                  <div
                    className="TeamIcons"
                    style={{
                      display: "flex",
                      paddingLeft: "7px",
                      paddingBottom: "5px",
                    }}
                  >
                    <a
                      href={"https://instagram.com/" + Alum.InstaID}
                      target="_blank"
                      rel="noreferrer"
                      style={{ paddingLeft: "3px", paddingRight: "3px" }}
                    >
                      <Instagram style={{ fontSize: "1.6rem" }} />
                    </a>
                    <a
                      href={"mailto:" + Alum.Email}
                      target="_blank"
                      rel="noreferrer"
                      style={{ paddingLeft: "3px", paddingRight: "3px" }}
                    >
                      <EnvelopeFill style={{ fontSize: "1.6rem" }} />
                    </a>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="OManagers Team">
        <h2>The Torso</h2>
        <Row sm={2} md={4} className="OManagers">
          {OManagers.clubRole.members.map((Alum, index) => (
            <Col key={Alum.id}>
              <Card className="card">
                <Card.Img
                  variant="top"
                  alt="Card image"
                  src={Alum.ProfilePicture.url}
                />
                <Card.ImgOverlay className="card-img-overlay d-flex flex-column justify-content-end">
                  <Card.Title style={{ paddingLeft: "7px" }}>
                    {Alum.Name}
                  </Card.Title>
                  <p style={{ fontSize: "0.9rem", paddingLeft: "5%" }}>
                    {OManagers.clubRole.members[index].club_roles[1].Role}
                  </p>
                  <div
                    className="TeamIcons"
                    style={{
                      display: "flex",
                      paddingLeft: "7px",
                      paddingBottom: "5px",
                    }}
                  >
                    <a
                      href={"https://instagram.com/" + Alum.InstaID}
                      target="_blank"
                      rel="noreferrer"
                      style={{ paddingLeft: "3px", paddingRight: "3px" }}
                    >
                      <Instagram style={{ fontSize: "1.6rem" }} />
                    </a>
                    <a
                      href={"mailto:" + Alum.Email}
                      target="_blank"
                      rel="noreferrer"
                      style={{ paddingLeft: "3px", paddingRight: "3px" }}
                    >
                      <EnvelopeFill style={{ fontSize: "1.6rem" }} />
                    </a>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="Members Team">
        <h2>The Limbs</h2>
        <Row sm={3} md={4} lg={5} className="Members">
          {Members.clubRole.members.map((Alum, index) => (
            <Col key={Alum.id}>
              <Card>
                <Card.Img
                  variant="top"
                  alt="Card image"
                  src={Alum.ProfilePicture.url}
                />
                <Card.ImgOverlay className="card-img-overlay d-flex flex-column justify-content-end">
                  <Card.Title style={{ paddingLeft: "7px" }}>
                    <h5>{Alum.Name}</h5>
                    <span style={{ fontSize: "0.9rem", paddingLeft: "5%" }}>
                      Member
                    </span>
                  </Card.Title>
                  <div
                    className="TeamIcons"
                    style={{
                      display: "flex",
                      paddingLeft: "7px",
                      paddingBottom: "5px",
                    }}
                  >
                    <a
                      href={"https://instagram.com/" + Alum.InstaID}
                      target="_blank"
                      rel="noreferrer"
                      style={{ paddingLeft: "3px", paddingRight: "3px" }}
                    >
                      <Instagram style={{ fontSize: "1.6rem" }} />
                    </a>
                    <a
                      href={"mailto:" + Alum.Email}
                      target="_blank"
                      rel="noreferrer"
                      style={{ paddingLeft: "3px", paddingRight: "3px" }}
                    >
                      <EnvelopeFill style={{ fontSize: "1.6rem" }} />
                    </a>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="Alumini Team">
        <h2>The Neck</h2>
        <Row sm={2} md={4} className="Alumini">
          {Alumini.clubRole.members.map((Alum) => (
            <Col key={Alum.id}>
              <Card className="card">
                <Card.Img
                  variant="top"
                  alt="Card image"
                  src={Alum.ProfilePicture.url}
                />
                <Card.ImgOverlay className="card-img-overlay d-flex flex-column justify-content-end">
                  <Card.Title style={{ paddingLeft: "7px" }}>
                    {Alum.Name}
                    <p style={{ fontSize: "0.9rem", paddingLeft: "5%" }}>
                      Alumni
                    </p>
                  </Card.Title>
                  <div
                    className="TeamIcons"
                    style={{
                      display: "flex",
                      paddingLeft: "7px",
                      paddingBottom: "5px",
                    }}
                  >
                    <a
                      href={"https://instagram.com/" + Alum.InstaID}
                      target="_blank"
                      rel="noreferrer"
                      style={{ paddingLeft: "3px", paddingRight: "3px" }}
                    >
                      <Instagram style={{ fontSize: "1.6rem" }} />
                    </a>
                    <a
                      href={"mailto:" + Alum.Email}
                      target="_blank"
                      rel="noreferrer"
                      style={{ paddingLeft: "3px", paddingRight: "3px" }}
                    >
                      <EnvelopeFill style={{ fontSize: "1.6rem" }} />
                    </a>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
