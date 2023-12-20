import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./ProfileReducer";
import issueReducer from "./IssueReducer";
import modalReducer from "./ModalReducer";

export const store = configureStore({
  reducer: {
    user: profileReducer,
    issues: issueReducer,
    modal: modalReducer,
  },
});
