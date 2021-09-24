import Load from "../Assets/Animations/load2.json";
import "./Loading.css";
import React from "react";
import Lottie from "lottie-react";

export default function Loading() {
  return (
    <div id="LoadingDiv">
      <div className="LoadHead">Loading...</div>
      <div className="LoadAni">
        <Lottie animationData={Load}></Lottie>
      </div>
    </div>
  );
}
