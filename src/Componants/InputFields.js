import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import RolesData from "../Data/RolesData";
import Locations from "../Data/Locations";
import Company from "../Data/Company";
import { useDispatch, useSelector } from "react-redux";
import { addFilterData } from "../Utils/JobsDataSlicer";

const InputFields = ({ setJobData, setPage }) => {
  const [formValues, setFormValues] = useState({
    roles: "",
    company: "",
    location: "",
    minExp: "",
    remote: "",
    techStack: "",
    minBasePay: "",
  });
  const dispatch = useDispatch();
  const data = useSelector((Store) => Store?.jobs?.jobData);
  useEffect(() => {
    filterJobs();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    formValues?.roles,
    formValues?.company,
    formValues?.location,
    formValues?.minExp,
    formValues?.remote,
    formValues?.techStack,
    formValues?.minBasePay,
    data,
  ]);

  const stateHandle = (name, e) => {
    const minBasePay = name == "minBasePay" && e.target.value.split(" ");

    const value = minBasePay ? minBasePay[0] : e.target.value;

    setFormValues({ ...formValues, [name]: value });
  };
  const filterJobs = () => {
    const FilterRole = formValues?.roles
      ? data.filter((item) =>
          item?.jobRole.toLowerCase().includes(formValues.roles.toLowerCase())
        )
      : data;
    const location = formValues?.location || formValues?.remote;
    const FilterLocation = location
      ? FilterRole.filter((item) =>
          item?.location.toLowerCase().includes(location.toLowerCase())
        )
      : FilterRole;

    const FilterCompany = formValues?.company
      ? FilterLocation.filter((item) =>
          item?.companyName
            .toLowerCase()
            .includes(formValues?.company.toLowerCase())
        )
      : FilterLocation;
    const FilterMinExp = formValues?.minExp
      ? FilterCompany.filter((item) => item?.minExp == formValues?.minExp)
      : FilterCompany;
    const FilterMinBasePay = formValues?.minBasePay
      ? FilterMinExp.filter(
          (item) => item?.minJdSalary == formValues?.minBasePay
        )
      : FilterMinExp;
    FilterMinBasePay.length === 0
      ? setJobData("error")
      : dispatch(addFilterData(FilterMinBasePay));
  };

  const resethandler = () => {
    setPage(30);
    setJobData(data);
    setFormValues({
      ...formValues,
      roles: "",
      comapny: "",
      location: "",
      minExp: "",
      remote: "",
      techStack: "",
      minBasePay: "",
    });
    // setFormValues((formValues.roles = ""));
    // setFormValues((formValues.location = ""));
    // setFormValues((formValues.company = ""));
    // setFormValues((formValues.minExp = ""));
    // setFormValues((formValues.remote = ""));
    // setFormValues((formValues.techStack = ""));
    // setFormValues((formValues.minBasePay = ""));
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="Roles">Roles</InputLabel>
        <Select
          labelId="Roles"
          id="Roles"
          value={formValues?.roles}
          label="Roles"
          onChange={(e) => stateHandle("roles", e)}
        >
          {RolesData.map((ele) => (
            <MenuItem value={ele} key={ele}>
              {ele}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="Min experience">Min experience</InputLabel>
        <Select
          labelId="Min experience"
          id="Min experience"
          value={formValues?.minExp}
          label="minExperience"
          onChange={(e) => stateHandle("minExp", e)}
        >
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map((ele) => (
            <MenuItem value={ele} key={ele}>
              {ele}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="location">Location</InputLabel>
        <Select
          labelId="location"
          id="location"
          value={formValues?.location}
          label="location"
          onChange={(e) => stateHandle("location", e)}
        >
          {Locations.map((ele) => (
            <MenuItem value={ele} key={ele}>
              {ele}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="companyName">Company name</InputLabel>
        <Select
          labelId="companyName"
          id="companyName"
          value={formValues?.company}
          label="companyName"
          onChange={(e) => stateHandle("company", e)}
        >
          {Company.map((ele) => (
            <MenuItem value={ele} key={ele}>
              {ele}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="Remote">Remote/on-site</InputLabel>
        <Select
          labelId="Remote"
          id="Remote"
          value={formValues?.remote}
          label="Remote"
          onChange={(e) => stateHandle("remote", e)}
        >
          {["Remote", "On-Site"].map((ele) => (
            <MenuItem value={ele} key={ele}>
              {ele}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="techStack">Tech stack</InputLabel>
        <Select
          labelId="techStack"
          id="techStack"
          value={formValues?.techStack}
          label="techStack"
          onChange={(e) => stateHandle("techStack", e)}
        >
          {[
            "React js",
            "JavaScript",
            "Html5",
            "css",
            "Tailwind css",
            "material UI",
            "Redux",
          ].map((ele) => (
            <MenuItem value={ele} key={ele}>
              {ele}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 170 }}>
        <InputLabel id="minBasePay">Min base pay</InputLabel>
        <Select
          labelId="minBasePay"
          id="minBasePay"
          label="minBasePay"
          value={formValues?.minBasePay}
          onChange={(e) => stateHandle("minBasePay", e)}
        >
          {["9 L", "13 L", "26 L", "48 L", "52 L", "57 L"].map((ele) => (
            <MenuItem value={ele} key={ele}>
              {ele}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        onClick={resethandler}
        sx={{ width: 20, border: 2, paddingX: 2, paddingY: 1.5, marginY: 1 }}
      >
        Reset
      </Button>
    </div>
  );
};

export default InputFields;
