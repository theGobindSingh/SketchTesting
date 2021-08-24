import React from "react";
import "./StoriesPage.css";

import Lottie from "lottie-react";
import underDev from "../Assets/Animations/underDev.json";

export default function StoriesPage() {
  return (
    <div id="storiesPageDIV">
      <h1>Under Development...</h1>
      <div id="dev">
        <Lottie id="underDevAni" animationData={underDev} />
      </div>
    </div>
  );
}
