import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "test",
  email: "test@example.com",
  profileUrl:
    "https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s1048/onepiece01_luffy.png",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});

export const profileActions = profileSlice.actions;
export default profileSlice.reducer;
