import React from "react";
import { useState } from "react";
import axios from 'axios';
import "./form.scss";

function Form(props) {
  const [method, setMethod] = useState('get');
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [showText, setShowText] = useState(false);
  const [inputText, setInputText] = useState({});
  const [memory, setMemory] = useState(
    JSON.parse(localStorage.getItem('memory')) || []
  );
  const saveMemoryData = async (data) =>{
    setMemory ([...memory,data]);
    await localStorage.setItem('memory',JSON.stringify(memory));
  };
  console.log('memory',memory);
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      console.log('input', inputText);
      props.handleLoad(true);
      const  response= await axios({
        method: method,
        url: url,
        data:{},
      });
      // const data = await raw.json();
      const formData = {
        method: method,
        url: url,
      };
      props.handleApiCall(response.headers ,response.data,formData);
      props.handleLoad(false);
      if (!localStorage.getItem('memory')){
        setMemory([formData]);
        localStorage.setItem('memory',JSON.stringify(formData));
      }
      saveMemoryData(formData);
      setShowText(false);
      // props.handleLoad(true);
    } catch (e) {
      console.error(e);
      props.handleLoad(true);
    }
  }
  async function handeleText(e) {
    setShowText(true);
    await setMethod(e.target.id);
    console.log('eTarget',e.target.id);
  
  }
  function handeleInputText(e) {
    setInputText(e.target.value);
  }
  async function handelMethod(e) {
    await setMethod(e.target.id);
    console.log('eTarget',e.target.id);
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
