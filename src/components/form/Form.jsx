import React from "react";
import { useState } from "react";
import "./form.scss";

function Form(props) {
  const [method, setMethod] = useState("GET");
  const [inputData, setInputData] = useState({});
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      props.handleLoad(true);
      const response = await fetch(`${e.target.url.value}`);
      console.log('response',response);
      const data = await response.json();
      const formData = {
        method: method,
        url: e.target.url.value,
      };
      props.handleLoad(false);
      props.handleApiCall(formData, data);
    } catch (e) {
      console.error(e);
    }
  }
  function handleInputData(e){
    setInputData(e.target.value);
  }

  if (method === "GET" || method === "DELETE") {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label>
            <span>URL: </span>
            <input name="url" type="text" />
          </label>
          <label className="methods">
            <span id="get" onClick={() => setMethod("GET")}>
              GET
            </span>
            <span id="post" onClick={() => setMethod("POST")}>
              POST
            </span>
            <span id="put" onClick={() => setMethod("PUT")}>
              PUT
            </span>
            <span id="delete" onClick={() => setMethod("DELETE")}>
              DELETE
            </span>
            <button type="submit" data-testid="mybtn">
              GO!
            </button>
          </label>
        </form>
      </>
    );
  }
  if (method === "POST" || method === "PUT") {
    return (
      <>
      <h3 style={{ color: 'red', margin: 'auto' }}>{method} is under construction</h3>;

        <form onSubmit={handleSubmit}>
          <label>
            <span>URL: </span>
            <input name="url" type="text" />
          </label>
          <label className="methods">
            <span id="get" onClick={() => setMethod("GET")}>
              GET
            </span>
            <span id="post" onClick={() => setMethod("POST")}>
              POST
            </span>
            <span id="put" onClick={() => setMethod("PUT")}>
              PUT
            </span>
            <span id="delete" onClick={() => setMethod("DELETE")}>
              DELETE
            </span>
          </label>
        <textarea onChange={handleInputData} />
            <button type="submit" data-testid="mybtn">
              GO!
            </button>
        </form>
      </>
    );
  }


}

export default Form;
