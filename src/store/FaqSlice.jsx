import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { FireToast } from "@/lib/fireToast";

export const getFaqs = createAsyncThunk(
  "Faq/getFaqs",
  async (item, { rejectWithValue, dispatch }) => {
    dispatch(startLoading());
    try {
      const response = await axios.get("admin/Faq/all");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addFaq = createAsyncThunk(
  "Faq/addFaq",
  async (item, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post("admin/Faq/create", item);
      dispatch(getFaqs());
      return response.data;
    } catch (error) {
      FireToast("error", error.response.data.message);

      return rejectWithValue(error);
    }
  }
);

export const deleteFaq = createAsyncThunk(
  "Faq/deleteFaq",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.delete(`admin/Faq/delete`, {
        data: { FaqId: id },
      });
      dispatch(getFaqs());
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateFaq = createAsyncThunk(
  "Faq/updateFaq",
  async (item, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.patch(`admin/Faq/edit`, item);
      dispatch(getFaqs());

      return response.data;
    } catch (error) {
      FireToast("error", error.response.data.message);

      return rejectWithValue(error);
    }
  }
);

const initialState = {
  faqs: [],
  loading: false,
};

const FaqSlice = createSlice({
  name: "Faq",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFaqs.fulfilled, (state, action) => {
      state.loading = false;
      state.faqs = action.payload.data;
    });
    builder.addCase(addFaq.fulfilled, (state, action) => {
      FireToast("success", "Faq Added successfully");
      state.loading = false;
    });
    builder.addCase(deleteFaq.fulfilled, (state, action) => {
      FireToast("warning", "Faq Deleted successfully");
      state.loading = false;
    });
    builder.addCase(updateFaq.fulfilled, (state, action) => {
      FireToast("success", "Faq Updated successfully");
      state.loading = false;
    });
  },
});

export const { startLoading } = FaqSlice.actions;
export default FaqSlice.reducer;
