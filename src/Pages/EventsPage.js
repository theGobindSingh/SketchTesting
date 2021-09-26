import React from "react";
import "./EventsPage.css";
import { useQuery, gql } from "@apollo/client";

import Loading from "../Components/Loading";
import Error from "../Components/Error";

import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const newEve = gql`
  query nE {
    eventCatagory(id: 2) {
      events(sort: "EventDate:desc") {
        id
        Title
        Poster {
          url
        }
      }
    }
  }
`;
const pastEve = gql`
  query pE {
    eventCatagory(id: 1) {
      events(sort: "EventDate:desc") {
        id
        Title
        Poster {
          url
        }
      }
    }
  }
`;

export default function EventsPage() {
  const Events = () => {
    const res1 = useQuery(newEve);
    const res2 = useQuery(pastEve);
    return [res1, res2];
  };

  const [
    { loading: loading1, error: error1, data: newE },
    { loading: loading2, error: error2, data: pastE },
  ] = Events();

  if (loading1 || loading2) {
    return <Loading />;
  }

  if (error1 || error2) {
    return <Error />;
  }

  const newEvents = newE.eventCatagory.events;
  const pastEvents = pastE.eventCatagory.events;

  console.log(newEvents);
  console.log(pastEvents);

  let newEves = <br></br>;
  let pastEves = <br></br>;

  if (newEvents.length !== 0) {
    newEves = (
      <div className="newEvents">
        <h2>Upcoming Events</h2>
        <Row sm={2} md={4} className="past Events" style={{ padding: "2.5%" }}>
          {newEvents.map((Eve) => (
            <Col key={Eve.id}>
              <div>
                <Link to={`/Events/${Eve.id}`}>
                  <img src={Eve.Poster.url} alt={Eve.Title} />
                </Link>
                <Link to={`/Events/${Eve.id}`}>
                  <h5
                    style={{
                      paddingLeft: "6%",
                      paddingTop: "3%",
                    }}
                  >
                    {Eve.Title}
                  </h5>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
  if (pastEvents.length !== 0) {
    pastEves = (
      <div className="pastEvents">
        <h2>Events</h2>
        <Row sm={2} md={4} className="past Events" style={{ padding: "2.5%" }}>
          {pastEvents.map((Eve) => (
            <Col key={Eve.id}>
              <div>
                <div className="aForImgEve">
                  <Link to={`/Events/${Eve.id}`}>
                    <img src={Eve.Poster.url} alt={Eve.Title} />
                  </Link>
                </div>
                <Link
                  to={`/Events/${Eve.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h5
                    style={{
                      paddingLeft: "6%",
                      paddingTop: "3%",
                    }}
                  >
                    {Eve.Title}
                  </h5>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  }

  return (
    <div id="eventsPageDIV">
      {newEves}
      {pastEves}
    </div>
  );
}
