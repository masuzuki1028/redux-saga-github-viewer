import React from "react";
import styled from "styled-components";

const SContainer = styled.div`
  padding: 16px;
  margin-top: 128px;

  h1 {
    text-align: center;
  }
`;

export const PullRequestTemplate = () => {
  return (
    <SContainer>
      <h1>PullRequest</h1>
    </SContainer>
  );
};
