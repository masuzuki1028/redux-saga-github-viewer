import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DropDown } from "./DropDown";

const SContainer = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: rgb(51, 51, 51);
  color: white;
`;

const SLogo = styled.div`
  a {
    color: white;
  }
`;

const SNavi = styled.ul`
  display: flex;
  width: 100%;
  padding: 0px 32px;
  li {
    margin-right: 16px;
  }
  li > a {
    color: white;
    font-size: 1.1rem;
  }
`;

const SMenu = styled.div`
  padding: 8px;
  font-size: 1.2rem;
`;
const STitle = styled.h1`
  white-space: nowrap;
`;

export const Header = () => {
  return (
    <SContainer>
      <SLogo>
        <Link to="/">
          <STitle>Github Viewer</STitle>
        </Link>
      </SLogo>
      <SNavi>
        <li>
          <Link to="/issue">Issue</Link>
        </li>
        <li>
          <Link to="/pull-request">Pull Request</Link>
        </li>
      </SNavi>
      <SMenu>
        <DropDown />
      </SMenu>
    </SContainer>
  );
};
