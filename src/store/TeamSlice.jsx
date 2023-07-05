import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { FireToast } from "@/lib/fireToast";

export const getTeams = createAsyncThunk(
  "team/getTeams",
  async (item, { rejectWithValue, dispatch }) => {
    dispatch(startLoading());
    try {
      const response = await axios.get("admin/Team/all");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addTeam = createAsyncThunk(
  "team/addTeam",
  async (item, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post("admin/Team/create", item);
      dispatch(getTeams());
      return response.data;
    } catch (error) {
      FireToast("error", error.response.data.message);
      return rejectWithValue(error);
    }
  }
);

export const deleteTeam = createAsyncThunk(
  "team/deleteTeam",
  async (id, { rejectWithValue, dispatch }) => {
    console.log(id);
    try {
      const response = await axios.delete(`admin/Team/delete`, {
        data: { TeamId: id },
      });
      dispatch(getTeams());
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const updateTeam = createAsyncThunk(
  "team/updateTeam",
  async (item, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.patch(`admin/Team/edit`, item);
      dispatch(getTeams());
      return response.data;
    } catch (error) {
      FireToast("error", error.response.data.message);
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  teams: [],
  loading: false,
};

const TeamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTeams.fulfilled, (state, action) => {
      state.loading = false;
      state.teams = action.payload.data;
    });
    builder.addCase(addTeam.fulfilled, (state, action) => {
      FireToast("success", "Team Member Added successfully");
      state.loading = false;
    });
    builder.addCase(deleteTeam.fulfilled, (state, action) => {
      FireToast("warning", "Team Member Deleted successfully");
      state.loading = false;
    });
    builder.addCase(updateTeam.fulfilled, (state, action) => {
      FireToast("success", "Team Member Updated successfully");
      state.loading = false;
    });
  },
});

export const { startLoading } = TeamSlice.actions;
export default TeamSlice.reducer;
