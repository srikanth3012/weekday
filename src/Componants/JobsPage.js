import React, { useEffect, useRef, useState } from "react";
import UseData from "../Hooks/UseData";
import { useSelector } from "react-redux";
import InputFields from "./InputFields";
import Jobs from "./Jobs";

const JobsPage = () => {
  const [page, setPage] = useState(50);
  const endRef = useRef();
  const [jobData, setJobData] = useState();
  UseData(page);

  const data = useSelector((store) => store?.jobs?.jobData);
  const filterData = useSelector((store) => store?.jobs?.filterData);

  useEffect(
    () => setJobData(filterData.length ? filterData : data),
    [data, filterData]
  );

  const handelScroll = () => {
    const { clientHeight, scrollHeight, scrollTop } = document.documentElement;
    if (clientHeight + scrollTop >= scrollHeight - 100) {
      setPage((prev) => prev + 12);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelScroll, true);

    return () => {
      window.removeEventListener("scroll", handelScroll, true);
    };
  }, [page]);

  if (!jobData) return;
  return (
    <div ref={endRef}>
      <InputFields setJobData={setJobData} setPage={setPage} />
      {jobData === "error" ? (
        <div>No Data Found Pls Click On Reset</div>
      ) : (
        <Jobs data={jobData} />
      )}
    </div>
  );
};

export default JobsPage;
