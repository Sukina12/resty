import React from "react";
import { useState } from "react";
import axios from 'axios';
import "./form.scss";

function Form(props) {
  const [method, setMethod] = useState('get');
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [showText, setShowText] = useState(false);
  const [inputText, setInputText] = useState({});
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log('input', inputText);
      const  response= await axios({
        method: method,
        url: url,
      });
      // const data = await raw.json();
      const formData = {
        method: method,
        url: url,
      };
      console.log('Data', response);
      console.log('formData', formData);
      console.log('url', url);
      props.handleApiCall(formData,inputText ,response.data);
      setShowText(false)
    } catch (e) {
      console.error(e);
    }
  }
  function handeleText(e) {
    setShowText(true);
    setMethod(e.target.id);
  
  }
  function handeleInputText(e) {
    setInputText(e.target.value);
  }
  function handelMethod(e) {
    setMethod(e.target.id);
  
  }

  if (method === 'get' || method === 'delete' ){

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='link' type='URL' onChange={e => setUrl(e.target.value)} />
          </label>
          <label className="methods">
          <input type="radio" name="btn" id="get" onClick={handelMethod} />
          <label>GET</label> &nbsp; &nbsp;
          <input type="radio" name="btn" id="post" onClick={handeleText} />
          <label>POST</label> &nbsp; &nbsp;
          <input type="radio" name="btn" id="put" onClick={handeleText} />
          <label>PUT</label> &nbsp; &nbsp;
          <input type="radio" name="btn" id="delete" onClick={handelMethod} />
          <label>DELETE</label> &nbsp; &nbsp;
          
          </label>
            <button type="submit" data-testid="mybtn">GO!</button>
         
        </form>
      </>
    );
  }
  if (method === 'post' || method === 'put' ){

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='link' type='URL' onChange={e => setUrl(e.target.value)} />
          </label>
          <label className="methods">
          <input type="radio" name="btn" id="get" onClick={handelMethod} />
          <label>GET</label> &nbsp; &nbsp;
          <input type="radio" name="btn" id="post" onClick={handeleText} />
          <label>POST</label> &nbsp; &nbsp;
          <input type="radio" name="btn" id="put" onClick={handeleText} />
          <label>PUT</label> &nbsp; &nbsp;
          <input type="radio" name="btn" id="delete" onClick={handelMethod} />
          <label>DELETE</label> &nbsp; &nbsp;
         </label>
            <button type="submit" data-testid="mybtn">GO!</button>
          {showText &&
            <textarea id="w3review" name="w3review" rows="10" cols="50" onChange={handeleInputText} />}
        </form>
      </>
    );
  }


}

export default Form;
