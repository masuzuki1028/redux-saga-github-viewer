import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SContainer = styled.div`
  border-radius: 6px;
  border: 1px solid #e1e4e8;
  width: 100%;
`;

const STextField = styled.input`
  padding: 8px;
  border: none;
  outline: none;
  background: none;
  font-size: 1rem;
  width: 100%;
`;

export const TextField = ({ value, onChange, placeholder }) => {
  return (
    <SContainer>
      <STextField
        type="input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </SContainer>
  );
};

TextField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
