import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SContainer = styled.div`
  border-radius: 6px;
  border: 1px solid #e1e4e8;
`;

const STextArea = styled.textarea`
  padding: 8px;
  border: none;
  outline: none;
  background: none;
  font-size: 1rem;
  width: 100%;
  min-height: 150px;
`;

export const TextArea = ({ value, onChange, placeholder }) => {
  return (
    <SContainer>
      <STextArea value={value} onChange={onChange} placeholder={placeholder} />
    </SContainer>
  );
};

TextArea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
