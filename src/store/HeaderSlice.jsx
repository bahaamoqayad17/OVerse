import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { FireToast } from "@/lib/fireToast";

export const updateHeader = createAsyncThunk(
  "header/updateHeader",
  async (item, { rejectWithValue }) => {
    try {
      const response = await axios.patch("admin/Home/edit", item);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateSecondPage = createAsyncThunk(
  "header/updateSecondPage",
  async (item, { rejectWithValue }) => {
    try {
      const response = await axios.patch("admin/SecondPage/edit", item);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchAllData = createAsyncThunk(
  "header/fetchAllData",
  async (item, { rejectWithValue, dispatch }) => {
    dispatch(startLoading());
    try {
      const response = await axios.get("admin/Home/all");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getMessage = createAsyncThunk(
  "header/getMessage",
  async (item, { rejectWithValue }) => {
    try {
      const response = await axios.get("admin/Message/all");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addMessage = createAsyncThunk(
  "header/addMessage",
  async (item, { rejectWithValue }) => {
    try {
      const response = await axios.post("admin/Message/create", item);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  header: {},
  secondPage: {},
  allData: {},
  messages: [],
  status: "idle",
  loading: false,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateHeader.fulfilled, (state, action) => {
      FireToast("success", "Header updated successfully");
      state.status = "succeeded";
      state.header = action.payload;
    });

    builder.addCase(updateSecondPage.fulfilled, (state, action) => {
      FireToast("success", "Wallet Page updated successfully");
      state.status = "succeeded";
      state.header = action.payload;
    });

    builder.addCase(fetchAllData.fulfilled, (state, action) => {
      state.loading = false;
      state.header = action.payload.home;
      state.secondPage = action.payload.secondPage;
      state.allData = action.payload;
    });

    builder.addCase(getMessage.fulfilled, (state, action) => {
      state.messages = action.payload.data;
    });

    builder.addCase(addMessage.fulfilled, (state, action) => {
      FireToast("success", "Message sent successfully");
    });
  },
});

export const { startLoading } = headerSlice.actions;

export default headerSlice.reducer;
