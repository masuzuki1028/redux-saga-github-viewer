import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SContainer = styled.div``;

const SMenuIcon = styled.i`
  cursor: pointer;
`;

const SDropDownMenu = styled.div`
  position: absolute;
  margin-top: 16px;
  right: 16px;
  width: 200px;
  border-radius: 2px;
  padding: 8px 0px;
  background: white;
  color: black;
  box-shadow: 1px 1px 4px 1px #33333326;
`;

const SMenuItem = styled.li`
  padding: 0;

  a {
    display: block;
    color: #333;
    padding: 8px;
    font-size: 1rem;
  }

  a:hover {
    background: #c6dae640;
    color: white;
  }
`;

export const DropDown = () => {
  const [showDropMenu, SetShowDropMenu] = useState(false);
  const onDisplaySwitch = () => SetShowDropMenu(!showDropMenu);

  return (
    <SContainer>
      <SMenuIcon className="fa fa-bars" onClick={onDisplaySwitch} />
      {showDropMenu && (
        <SDropDownMenu>
          <ul>
            <SMenuItem>
              <Link to="/" onClick={onDisplaySwitch}>
                Top
              </Link>
              <Link to="/profile" onClick={onDisplaySwitch}>
                Your Profile
              </Link>
              <Link to="/issue" onClick={onDisplaySwitch}>
                Issue
              </Link>
              <Link to="/pull-request" onClick={onDisplaySwitch}>
                Pull Request
              </Link>
            </SMenuItem>
          </ul>
        </SDropDownMenu>
      )}
    </SContainer>
  );
};
