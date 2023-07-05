import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { FireToast } from "@/lib/fireToast";

export const getAbouts = createAsyncThunk(
  "About/getAbouts",
  async (item, { rejectWithValue, dispatch }) => {
    dispatch(startLoading());
    try {
      const response = await axios.get("admin/About/all");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addAbout = createAsyncThunk(
  "About/addAbout",
  async (item, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post("admin/About/create", item);
      dispatch(getAbouts());
      return response.data;
    } catch (error) {
      FireToast("error", error.response.data.message);

      return rejectWithValue(error);
    }
  }
);

export const deleteAbout = createAsyncThunk(
  "About/deleteAbout",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.delete(`admin/About/delete`, {
        data: {
          AboutId: id,
        },
      });
      dispatch(getAbouts());
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateAbout = createAsyncThunk(
  "About/updateAbout",
  async (item, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.patch(`admin/About/edit`, item);
      dispatch(getAbouts());
      return response.data;
    } catch (error) {
      FireToast("error", error.response.data.message);

      return rejectWithValue(error);
    }
  }
);

const initialState = {
  abouts: [],
  loading: false,
};

const AboutSlice = createSlice({
  name: "About",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAbouts.fulfilled, (state, action) => {
      state.loading = false;
      state.abouts = action.payload.data;
    });
    builder.addCase(addAbout.fulfilled, (state, action) => {
      FireToast("success", "About Added successfully");
      state.loading = false;
    });
    builder.addCase(deleteAbout.fulfilled, (state, action) => {
      FireToast("warning", "About Deleted successfully");
      state.loading = false;
    });
    builder.addCase(updateAbout.fulfilled, (state, action) => {
      console.log("test");
      FireToast("success", "About Updated successfully");
      state.loading = false;
    });
  },
});

export const { startLoading } = AboutSlice.actions;
export default AboutSlice.reducer;
