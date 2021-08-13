import React from "react";
import "./results.scss";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/adventure_time.css";
import { useState } from "react";
function Results(props) {
  console.log(props);
  const fake = {
    "cache-control": "public, max-age=86400, s-maxage=86400",
    "content-type": "application/json; charset=utf-8",
  };
  const [methodsData, setMethodsData] = useState(
    JSON.parse(localStorage.getItem("memory")) || []
  );

  return (
    <>
      <section>
        <h3>Count</h3>
        <JSONPretty
          data={
            props.data.data.results
              ? props.data.data.results.length
              : props.data.data.data.length
          }
        ></JSONPretty>
        <h3>Headers</h3>
        <JSONPretty
          data={props.data.headers ? props.data.headers : fake}
        ></JSONPretty>
        <h3>Results</h3>
        <JSONPretty
          data={
            props.data.data.results
              ? props.data.data.results
              : props.data.data.data
          }
        ></JSONPretty>
      </section>
    </>
  );
}
export default Results;
