import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Results';

// import { useState } from 'react';
import { BeatLoader } from 'react-spinners';
import {  useState, useEffect, useReducer } from 'react';
// import { initialState, historyReducer, addAction} from './reducer/Reducer';
import History from './components/MethodList/History';
import axios from 'axios';
const initialState = {
  history:[],
};
function App () {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [requestBody, setRequestBody] = useState({});
  const [state,dispatch ] = useReducer(historyReducer,initialState);
  const [load, setLoad] = useState(false);

  
  function historyReducer (state=initialState, action){
    const {type, payload} = action;
    switch (type) {
      case 'ADD-TO-HISTORY':
        const history = [...state.history , payload.history];
        return {history};
      default :
        return state;
    }
  }
  
  function addAction (history){
    return {
      type : 'ADD-TO-HISTORY',
      payload : {history},
    };
  }
  useEffect (async ()=>{
    if(requestParams.url){
      if(requestBody){
        dispatch(addAction(requestParams));
        console.log('requestParams',requestParams);
        const data = await axios[requestParams.method](requestParams.url, JSON.parse(requestBody));
        console.log('The data',data);
       setData(data);
       setLoad(false);
      }else {
        dispatch(addAction(requestParams));
        const data = await axios[requestParams.method](requestParams.url);
        setData(data);
        setLoad(false);
      }
    }
  },[requestParams]);
 
  async function callApi(formData,requestBody){
    setLoad(true);
    if(formData.url){
      setRequestParams(formData);
      setRequestBody(requestBody);
    }else {
      const data = {
        count: 2,
        method: formData.method,
        results: [
          { name: 'fake thing 1', url: 'http://fakethings.com/1' },
          { name: 'fake thing 2', url: 'http://fakethings.com/2' },
        ],
      };
      setData({data})
      setRequestParams(formData);
      setLoad(false);
      dispatch(addAction(formData));
      
    }
   
  }


    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
          <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        {state.history.length ? <History history={state.history} /> : null}
        {load ? <BeatLoader load /> : data && <Results data ={data} />}
        <Footer />
      </React.Fragment>
    );
  

}

export default App;
