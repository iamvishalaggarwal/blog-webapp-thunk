import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Pranjal" },
  { id: "1", name: "Nandita" },
  { id: "2", name: "Vishal" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
