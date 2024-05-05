import { createSlice } from "@reduxjs/toolkit";

const JobsDataSlicer = createSlice({
  name: "jobs",
  initialState: {
    jobData: [],
    filterData: [],
  },
  reducers: {
    addData(state, { payload }) {
      state.jobData = payload;
    },
    addFilterData(state, { payload }) {
      state.filterData = payload;
    },
  },
});
export const { addData, addFilterData } = JobsDataSlicer.actions;
export default JobsDataSlicer.reducer;
