import { configureStore } from "@reduxjs/toolkit";
import JobsDataSlicer from "./Utils/JobsDataSlicer";

const store = configureStore({
  reducer: {
    jobs: JobsDataSlicer,
  },
});
export default store;
