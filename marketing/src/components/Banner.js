import React from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import team from "../images/teamwork.png";

const Banner = () => {
  return (
    <div className="banner">
      <img id="teamwork" src={team} />
      <div className="key-question">
        <h1>Parent-Teacher Collaboration Redefined</h1>
        <h3>Let's all be proactive for our kids.</h3>
        <Button>For Teachers</Button>
        <Button>For Parents</Button>
      </div>
    </div>
  );
};

export default Banner;
