import Lottie from "lottie-react";
import React from "react";
import "./EventsPage.css";
import underDev from "../Assets/Animations/underDev.json";

export default function EventsPage() {
  return (
    <div id="eventsPageDIV">
      <h1>Under Development...</h1>
      <div id="dev">
        <Lottie id="underDevAni" animationData={underDev} />
      </div>
    </div>
  );
}
