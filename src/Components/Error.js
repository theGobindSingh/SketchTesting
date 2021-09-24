import "./Error.css";
import Err from "../Assets/Animations/Error1.json";
import React from "react";
import Lottie from "lottie-react";

export default function Error() {
  return (
    <div id="ErrorDiv">
      <div className="ErrHead">Error!</div>
      <div className="ErrAni">
        <Lottie animationData={Err}></Lottie>
      </div>
    </div>
  );
}
