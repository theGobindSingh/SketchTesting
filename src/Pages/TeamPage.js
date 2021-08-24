import React from "react";
import "./TeamPage.css";

import Lottie from "lottie-react";
import underDev from "../Assets/Animations/underDev.json";

export default function TeamPage() {
  return (
    <div id="TeamPageDIV">
      <h1>Under Development...</h1>
      <div id="dev">
        <Lottie id="underDevAni" animationData={underDev} />
      </div>
    </div>
  );
}
