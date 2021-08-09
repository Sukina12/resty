import React from 'react';
import { useState,setState } from 'react';
import './form.scss';
import axios from 'axios';

function Form (props) {

  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');
  const [showData, setShowData] = useState(false);
  const [inputData, setInputData] = useState('https://pokeapi.co/api/v2/pokemon');
  

  async function handleSubmit (e)   {
    e.preventDefault();
    const formData = await axios({
      method:method,
      url:url,
    });
    console.log('formData',formData);
    props.handleApiCall(formData,inputData);
  }

  function handleData (e) {
    setShowData(true);
    setMethod(e.target.id);
  }

  function handleInputData(e){
    setInputData(e.target.value);
  }

  function handleMethod(e){
    setMethod(e.target.id);
  }

  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='URL' onChange ={e => setUrl (e.target.value)} />
          <button type="submit" data-testid="mybtn" >GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick ={handleMethod}>GET</span>
          <span id="post" onClick = {handleData}>POST</span>
          <span id="put" onClick ={handleData}>PUT</span>
          <span id="delete" onClick ={handleMethod}>DELETE</span>
        </label>
        {showData && 
          <textarea onChange={handleInputData} />
        }
      </form>
    </>
  );
}

export default Form;
