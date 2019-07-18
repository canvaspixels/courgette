import React from "react";
import "./HomePage.css";
import Banner from "./Banner";

const WebComponentsPage = () => (
  <div className="Home">
    <Banner />
    <h1 className="main-heading">Web Components page</h1>
    <hello-world value="HEllo WorLD" />
  </div>
);

export default WebComponentsPage;
