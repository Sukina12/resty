import React from "react";
import { useState } from "react";
import axios from "axios";
import "./form.scss";
import MethodList from "../MethodList/History";

function Form(props) {
  const [method, setMethod] = useState("get");

  const [showText, setShowText] = useState(false);

  const [body, setBody] = useState("");

  const [memory, setMemory] = useState(
    JSON.parse(localStorage.getItem("memory")) || []
  );
  const saveMemoryData = async (data) => {
    setMemory([...memory, data]);
    await localStorage.setItem("memory", JSON.stringify(memory));
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      method: method,
      url: e.target.url.value,
    };
    if (method === "get" || method === "delete") {
      props.handleApiCall(formData);
    }
    if (method === "post" || method === "put") {
      props.handleApiCall(formData, body);
    }
  }

  function handelMethod(e) {
   
    setMethod(e.target.id);
    console.log("eTarget", e.target.id);
    e.target.className = "active";
  }
  function handleBody(e) {
    setBody(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="URL" />
        </label>
        <label className="methods">
          <input type="radio" name="btn" id="get" onClick={handelMethod} />
          <label>GET</label> &nbsp; &nbsp;
          <input type="radio" name="btn" id="post" onClick={handelMethod} />
          <label>POST</label> &nbsp; &nbsp;
          <input type="radio" name="btn" id="put" onClick={handelMethod} />
          <label>PUT</label> &nbsp; &nbsp;
          <input type="radio" name="btn" id="delete" onClick={handelMethod} />
          <label>DELETE</label> &nbsp; &nbsp;
        </label>
        <button type="submit" data-testid="mybtn">
          GO!
        </button>
        <label>
          {(method === 'post' || method === 'put') && (
            <textarea name='body' id='body' cols='80' rows='20' placeholder="{'key': 'value'}" onChange={handleBody}></textarea> 
          )}
        </label>
      </form>
    </>
  );
}

export default Form;
