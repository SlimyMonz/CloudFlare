import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// Data
import {userInfo} from "../data";

const initialState = {
  isLoading: true,
  error: "",
  data: [],
};

export const url = `https://api.github.com/users/${userInfo.githubUsername}`;

export const fetchGitHubInfo = createAsyncThunk(
  "home/fetchGitHubInfo",
  async (thunkApi, { rejectWithValue }) => {
    try {
      const [response] = await Promise.all([fetch(url).then(function (res) {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res;
      })]);
      return await response.json();
    } catch (err) {
      return rejectWithValue(
        `Error: ${err.message}, check username in data.js (currently ${userInfo.githubUsername})`
      );
    }
  }
);

export const homeSlice = createSlice({
  name: "home",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGitHubInfo.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchGitHubInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchGitHubInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(state.error);
      });
  },
});

export const selectIsLoading = (state) => state.home.isLoading;
export const selectError = (state) => state.home.error;
export const selectData = (state) => state.home.data;

export default homeSlice.reducer;
