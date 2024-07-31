/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice, isPending } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = [
//   { id: "0", name: "Pranjal" },
//   { id: "1", name: "Nandita" },
//   { id: "2", name: "Vishal" },
// ];

const initialState = [];

const USERS_URL = "https://jsonplaceholder.typicode.com/users/";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(USERS_URL);
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
