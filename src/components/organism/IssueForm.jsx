import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { upsertIssue } from "../../store/IssueReducer";
import PropTypes from "prop-types";
import { hide } from "../../store/ModalReducer";
import styled from "styled-components";
import { Button } from "../atoms/Button";
import { TextField } from "../atoms/TextField";
import { TextArea } from "../atoms/TextArea";
import axios from "axios";
import { upsertIssue } from "../../store/IssueReducer";
// import { create } from "domain";

const SContainer = styled.div`
  max-width: 598px;
  margin: auto;
  a {
    width: auto;
  }

  textarea {
    min-height: 150px;
  }
`;

const STitle = styled.h2`
  padding: 0 8px;
`;

const SForm = styled.div`
  padding: 32px 0;
  padding-bottom: 16px;
`;
const SField = styled.div`
  padding: 16px;
`;
const SLabel = styled.label`
  display: block;
  padding: 8px 0;
`;

const SErrorMessageContainer = styled.div`
  padding: 16px;
  min-height: 100px;
`;

const SErrorMessage = styled.p`
  color: rgb(215, 58, 73);
  background: #d73a4959;
  padding: 8px;
  border-radius: 6px;
`;

const SFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
`;

export const IssueForm = (props) => {
  const { id } = props || {};
  const [issue, setIssue] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_PUBLIC_URL}/issues/${id}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
            },
          }
        );
        setIssue(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [id]);

  const createIssue = async () => {
    const issueData = {
      title: title,
      body: description,
    };
    console.log("issueData: ", issueData);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_PUBLIC_URL}/issues`,
        issueData,
        {
          headers: {
            Authorization: `${process.env.REACT_APP_GITHUB_API_TOKEN}`,
          },
        }
      );
      console.log("Issue created: ", response.data);
    } catch (error) {
      console.error("Error creating issue: ", error);
    }
  };

  const isEdit = !!issue.id;
  const [validationError, setValidationError] = useState("");
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("0");

  useEffect(() => {
    if (isEdit) {
      setTitle(issue.title);
      setDescription(issue.body);
      setStatus(issue.state === "open" ? 0 : 1);
      setValidationError("");
    }
  }, [issue, isEdit]);

  const onSubmit = () => {
    if (!title) {
      setValidationError("タイトルを入力してください");
      return;
    }

    if (!description) {
      setValidationError("説明を入力してください");
      return;
    }

    createIssue();
    dispatch(upsertIssue({ id, title, description, status }));
    dispatch(hide());
  };

  const onClose = () => {
    dispatch(hide());
  };

  return (
    <SContainer>
      <STitle>Issueを追加</STitle>
      <SForm>
        <SField>
          <SLabel>タイトル</SLabel>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="タイトルを入力してください"
          />
        </SField>
        <SField>
          <SLabel>説明</SLabel>
          <TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="説明を入力してください"
          />
        </SField>
      </SForm>
      {isEdit ? (
        <SForm>
          <SField>
            <SLabel>ステータス</SLabel>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value={0}>Open</option>
              <option value={1}>Close</option>
            </select>
          </SField>
        </SForm>
      ) : null}
      <SErrorMessageContainer>
        {validationError && <SErrorMessage>{validationError}</SErrorMessage>}
      </SErrorMessageContainer>
      <SFooter>
        <Button
          variant="new"
          onClick={onSubmit}
          text={isEdit ? "更新" : "作成"}
        />
        <Button onClick={onClose} text="閉じる" />
      </SFooter>
    </SContainer>
  );
};

IssueForm.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
};
