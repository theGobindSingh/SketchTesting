import "./EventDetailPage.css";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { useQuery, gql } from "@apollo/client";
import Loading from "../Components/Loading";
import Error from "../Components/Error";

const eve = gql`
  query ($id: ID!) {
    event(id: $id) {
      Poster {
        url
      }
      Title
      EventDate
      Content
    }
  }
`;
export default function EventDetailPage() {
  useEffect(() => {
    var aElem = document.getElementsByTagName("a");
    for (let i = 0; i < aElem.length; i++) {
      aElem[i].setAttribute("target", "_blank");
      aElem[i].setAttribute("rel", "noreferrer");
    }
  }, []);
  const { id } = useParams();

  const { loading, error, data } = useQuery(eve, { variables: { id: id } });
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div id="EventDetailDIV">
      <div
        className="Eve title container"
        style={{
          marginBottom: "15px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>{data.event.Title}</h1>
      </div>
      <div
        className="Eve img container"
        style={{
          marginBottom: "15px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={data.event.Poster.url}
          alt={data.event.Title}
          style={{
            marginBottom: "15px",
            borderRadius: "50%",
            maxWidth: "20%",
            height: "auto",
            objectFit: "contain",
          }}
        ></img>
      </div>
      <div
        className="Eve date container"
        style={{
          marginBottom: "15px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h3>
          <Moment format="DD MMM YYYY" children={data.event.EventDate} />
        </h3>
      </div>
      <div
        className="Eve content container"
        style={{
          borderRadius: "10px",
          padding: "4%",
          paddingLeft: "5%",
          background: "rgba(215, 215, 255,0.2)",
        }}
      >
        <ReactMarkdown>{data.event.Content}</ReactMarkdown>
      </div>
    </div>
  );
}
