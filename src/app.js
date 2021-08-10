import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Results';
import { useState } from 'react';
import { BeatLoader } from 'react-spinners';

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [load, setLoad] = useState(false);
  const [status, setStatus] = useState(false);
  function callApi(formData, responseData)  {
    setData(responseData);
    setRequestParams(formData);
  }

  function handleLoad(load) {
    setLoad(load);
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
      <Form handleLoad={handleLoad} handleApiCall={callApi} />
      {load ? <BeatLoader load/> : <Results data ={data} />}
      <Footer />
    </React.Fragment>
  );

}

export default App;
