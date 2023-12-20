import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const SContainer = styled.tr`
  cursor: pointer;

  &:hover {
    background: #c6dae640;
  }
`;

const Status = {
  0: "open",
  1: "close",
};

export const IssueItem = ({ item, onClickCheckBox, checked, onRowClick }) => {
  const status = Status[item.status];
  const now = dayjs().format("MM-DD-YYYY");

  return (
    <SContainer key={item.id}>
      <td>
        <input
          type="checkbox"
          checked={checked}
          onChange={onClickCheckBox}
        ></input>
      </td>
      <td onClick={onRowClick}>{item.title}</td>
      <td onClick={onRowClick}>{status}</td>
      <td onClick={onRowClick}></td>
      <td onClick={onRowClick}>{now}</td>
      <td onClick={onRowClick}>{now}</td>
    </SContainer>
  );
};

IssueItem.propTypes = {
  item: PropTypes.object,
  checked: PropTypes.bool,
  onClickCheckBox: PropTypes.func,
  onRowClick: PropTypes.func,
};
