import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { GlobalStyle } from "./styles/GlobalStyle";
import { TopPage } from "./pages/TopPage";
import { IssuePage } from "./pages/IssuePage";
import { PullRequestPage } from "./pages/PullRequestPage";
import { ProfilePage } from "./pages/ProfilePage";
import { Header } from "./components/organism/Header";
import styled from "styled-components";

const SContent = styled.div`
  max-width: 896px;
  margin: 0 auto;
  padding: 32px 16px;
`;

function App() {
  const modal = useSelector((state) => state.modal);

  return (
    <BrowserRouter basename="/redux-github-viewer">
      <GlobalStyle />
      <Header />
      <SContent>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/issue" element={<IssuePage />} />
          <Route path="/pull-request" element={<PullRequestPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </SContent>
      <Modal isOpen={modal.show} >
        {modal.content}
      </Modal>
    </BrowserRouter>
  );
}

export default App;
