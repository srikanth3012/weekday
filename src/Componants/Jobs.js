import { Box, Typography } from "@mui/material";
import React from "react";
import JobCard from "./JobCard";

const Jobs = ({ data }) => {
  return data?.length !== 0 ? (
    <div>
      {" "}
      <Box display="flex" flexWrap="wrap">
        {data.map((item) => (
          <div key={item?.jdUid}>
            <JobCard item={item} />
          </div>
        ))}
      </Box>
    </div>
  ) : (
    <div>
      <Typography>No Results Found</Typography>
    </div>
  );
};

export default Jobs;
