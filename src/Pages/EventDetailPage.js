import "./EventDetailPage.css";
import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function EventDetailPage() {
  const { id } = useParams();

  return (
    <div id="EventDetailDIV">
      <div className="eveImgCont" style={{ display: "flex" }}>
        Wait pandra
      </div>
    </div>
  );
}
