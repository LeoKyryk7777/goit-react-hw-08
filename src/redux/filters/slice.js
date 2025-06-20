import { createSlice } from "@reduxjs/toolkit";

const initialState = { filter: "" };

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;

export const filterReduser = slice.reducer;
// export const selectNameFilter = (state) => state.filter.filter;
