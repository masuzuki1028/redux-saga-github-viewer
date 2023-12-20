import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SContainer = styled.div``;

const STabs = styled.ul`
  display: flex;

  li {
    padding: 0;
  }

  span {
    cursor: pointer;
    color: rgb(88, 96, 105);
    padding: 16px;
    display: block;
    width: 100%;
  }
`;

const activeStyle = "1px solid #e1e4e8";

const STab = styled.li`
  font-size: 1.2rem;
  text-align: center;
  width: 100%;
  border-radius: 6px 6px 0px 0px;
  border-top: ${({ active }) =>
    !active || active === "false" ? "" : activeStyle};
  border-right: ${({ active }) =>
    !active || active === "false" ? "" : activeStyle};
  border-left: ${({ active }) =>
    !active || active === "false" ? "" : activeStyle};
  border-bottom: ${({ active }) =>
    !active || active === "true" ? "" : activeStyle};
`;

export const TabHeader = ({ tabs, selected, onChange }) => {
  return (
    <SContainer>
      <STabs>
        {tabs.map((tab) => {
          const active = tab.key === selected;
          const onClick = () => onChange(tab.key);
          return (
            <STab active={active.toString()} key={tab.key}>
              <span onClick={onClick}>{tab.text}</span>
            </STab>
          );
        })}
      </STabs>
    </SContainer>
  );
};

TabHeader.propTypes = {
  tabs: PropTypes.array,
  selected: PropTypes.string,
  onChange: PropTypes.func,
};
