import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../Utils/JobsDataSlicer";

function UseData(page) {
  const dispatch = useDispatch();

  useEffect(() => {
    GetData();
  }, [page]);

  async function GetData() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: page,
      offset: 0,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };
    const data = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );
    const json = await data.json();

    dispatch(addData(json.jdList));
  }
}
export default UseData;
