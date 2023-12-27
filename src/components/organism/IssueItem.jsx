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

export const IssueItem = ({ item, onClickCheckBox, checked, onRowClick }) => {
  const dayFormat = (date) => {
    return dayjs(date).format("MM-DD-YYYY");
  };

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
      <td onClick={onRowClick}>{item.state}</td>
      <td onClick={onRowClick}>{item.author_association}</td>
      <td onClick={onRowClick}>{dayFormat(item.created_at)}</td>
      <td onClick={onRowClick}>{dayFormat(item.updated_at)}</td>
    </SContainer>
  );
};

IssueItem.propTypes = {
  item: PropTypes.object,
  checked: PropTypes.bool,
  onClickCheckBox: PropTypes.func,
  onRowClick: PropTypes.func,
};
