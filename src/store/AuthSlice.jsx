import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { FireToast } from "@/lib/fireToast";
import Router from "next/router";

export const login = createAsyncThunk(
  "auth/login",
  async (item, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post("admin/login", item);
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      FireToast("error", error.response.data.message);

      return rejectWithValue(error);
    }
  }
);

const initialState = {
  user: {},
  loading: false,
  error: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      Router.push("/admin");
      FireToast("success", "Login Success");
      state.loading = false;
      state.user = action.payload.data;
    });
  },
});

export default AuthSlice.reducer;
