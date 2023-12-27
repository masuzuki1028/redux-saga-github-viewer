import React, { useState } from "react";
import styled from "styled-components";
import { IssueTemplete } from "../components/template/IssueTemplate";
import { PullRequestTemplate } from "../components/template/PullRequestTemplate";
import { TabHeader } from "../components/organism/TabHeader";
// import { UserApi } from "../components/api/UserApi";

const Tabs = [
  {
    key: "issue",
    text: "Issue",
  },
  {
    key: "pull-request",
    text: "Pull Request",
  },
];

const TabsComponent = [
  {
    key: "issue",
    commponent: <IssueTemplete />,
  },
  {
    key: "pull-request",
    commponent: <PullRequestTemplate />,
  },
];

const SContainer = styled.div``;
export const TopPage = () => {
  const [selected, setSelected] = useState("issue");
  return (
    <SContainer>
      <TabHeader selected={selected} onChange={setSelected} tabs={Tabs} />
      {TabsComponent.map((item) =>
        selected === item.key ? item.commponent : <></>
      )}
    </SContainer>
  );
};
