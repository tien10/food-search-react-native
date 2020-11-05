import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const searchApi = async (searchTerm) => {
    console.log("Hi");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          // location: 'san jose',
          location: "NYC",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      console.log(error);
      setErrorMessage("Something went wrong");
    }
  };
  useEffect(() => {
    searchApi("pasta");
  }, []);
  // console.log('results: ', results);
  return [searchApi, results, errorMessage];
};
