import { useEffect, useState } from "react";
import dspb from "../api/dspb";

export default () => {
  const [results, setResults] = useState([]);
  const dspbApi = async (searchTerm) => {
    console.log("dspb");
    try {
      const res = await dspb.post("/CM_DEPARTMENT_Search", {});
      // console.log(res.data);
      setResults(res.data.result.items);
    } catch (error) {
      console.log("error: ", error);
    }
    ("");
  };
  // useEffect(() => {
  //   dspbApi("BGÐ");
  // }, []);
  return [dspbApi, results];
};
