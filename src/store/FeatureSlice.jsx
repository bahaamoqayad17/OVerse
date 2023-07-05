import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { FireToast } from "@/lib/fireToast";

export const getFeatures = createAsyncThunk(
  "Feature/getFeatures",
  async (item, { rejectWithValue, dispatch }) => {
    dispatch(startLoading());
    try {
      const response = await axios.get("admin/Feature/all");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addFeature = createAsyncThunk(
  "Feature/addFeature",
  async (item, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post("admin/Feature/create", item);
      dispatch(getFeatures());
      return response.data;
    } catch (error) {
      FireToast("error", error.response.data.message);

      return rejectWithValue(error);
    }
  }
);

export const deleteFeature = createAsyncThunk(
  "Feature/deleteFeature",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.delete(`admin/Feature/delete`, {
        data: {
          FeatureId: id,
        },
      });
      dispatch(getFeatures());
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateFeature = createAsyncThunk(
  "Feature/updateFeature",
  async (item, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.patch(`admin/Feature/edit`, item);
      dispatch(getFeatures());
      return response.data;
    } catch (error) {
      FireToast("error", error.response.data.message);

      return rejectWithValue(error);
    }
  }
);

const initialState = {
  features: [],
  loading: false,
};

const FeatureSlice = createSlice({
  name: "Feature",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFeatures.fulfilled, (state, action) => {
      state.loading = false;
      state.features = action.payload.data;
    });
    builder.addCase(addFeature.fulfilled, (state, action) => {
      FireToast("success", "Feature Added successfully");
      state.loading = false;
    });
    builder.addCase(deleteFeature.fulfilled, (state, action) => {
      FireToast("warning", "Feature Deleted successfully");
      state.loading = false;
    });
    builder.addCase(updateFeature.fulfilled, (state, action) => {
      FireToast("success", "Feature Updated successfully");
      state.loading = false;
    });
  },
});

export const { startLoading } = FeatureSlice.actions;
export default FeatureSlice.reducer;
