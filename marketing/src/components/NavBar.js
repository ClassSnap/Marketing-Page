import React from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const NavBar = () => {
  const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #00ced1;
    padding: 20px 15px;
    width: 100%;
    font-size: calc(10px + 2vmin);
    color: white;
  `;

  return (
    <Nav>
      <div className="header">
        <h1>ClassSnap</h1>
      </div>
      <div className="menu">
        <span>Why ClassSnap?</span>
        <span>Teacher</span>
        <span>Parents</span>
        <span>Resources</span>
        <span>Login</span>
        <Button>Get Started</Button>
      </div>
    </Nav>
  );
};

export default NavBar;
