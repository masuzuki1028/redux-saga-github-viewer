import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../atoms/Button";
import { useDispatch } from "react-redux";
import { deleteIssue } from "../../store/IssueReducer";
import { open } from "../../store/ModalReducer";
import { IssueItem } from "../organism/IssueItem";
import { IssueForm } from "../organism/IssueForm";
import { TextField } from "../atoms/TextField";
import axios from "axios";

const SContainer = styled.div`
  padding: 16px;
  margin-top: 16px;
`;

const SContent = styled.div``;

const SHeader = styled.div`
  display: flex;
  align-items: center;
`;

const SHeading = styled.div`
  display: flex;
  align-items: center;
`;

const SForm = styled.div`
  padding: 8px 16px;
  display: flex;
  width: 100%;
`;

const SAction = styled.div`
  display: flex;
`;

const STable = styled.table`
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  .outline {
    width: 140rem;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    min-width: 10rem;
    border-bottom: 1px solid #e1e4e8;
  }

  th:first-child,
  td:first-child {
    min-width: auto;
  }

  .no-divider {
    border-bottom: 0;
  }
`;

export const IssueTemplete = () => {
  // const data = useSelector((state) => state.issues);
  const dispatch = useDispatch();
  const [issues, setIssues] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const filteredIssues = Object.values(issues).filter((item) => {
    return item.title.toLowerCase().includes(searchTitle.toLowerCase());
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_PUBLIC_URL}/issues?state=all`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
            },
          }
        );
        setIssues(
          response.data.sort(function (first, second) {
            return first.number - second.number;
          })
        );
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const openModal = () => {
    dispatch(open(<IssueForm />));
  };

  const onClickCheckBox = (id) => {
    setSelectedIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((prevId) => prevId !== id)
        : [...prevIds, id]
    );
  };

  const onRemove = () => {
    selectedIds.forEach((id) => {
      dispatch(deleteIssue(id));
    });
  };

  const onRowClick = (id) => {
    dispatch(open(<IssueForm id={id} />));
  };

  return (
    <SContainer>
      <SHeader>
        <SHeading>
          <h2>Issue</h2>
        </SHeading>
        <SForm>
          <TextField
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            placeholder="Issue名で検索"
          />
        </SForm>
        <SAction>
          <Button variant="new" onClick={openModal} text="new" />
          <Button variant="delete" onClick={onRemove} text="delete" />
        </SAction>
      </SHeader>
      <SContent>
        <STable>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th></th>
              <th>ステータス</th>
              <th>作成者</th>
              <th>作成日付</th>
              <th>更新日付</th>
            </tr>
          </thead>
          <tbody>
            {filteredIssues.length > 0 ? (
              filteredIssues.map((item) => (
                <IssueItem
                  key={item.number}
                  item={item}
                  onClickCheckBox={() => onClickCheckBox(item.number)}
                  checked={selectedIds.includes(item.number)}
                  onRowClick={() => onRowClick(item.number)}
                />
              ))
            ) : (
              <tr>
                <td colSpan="6">データがありません</td>
              </tr>
            )}
          </tbody>
        </STable>
      </SContent>
    </SContainer>
  );
};
