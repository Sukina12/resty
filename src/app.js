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

class App extends React.Component {
  constructor (props){
    super (props);
    this.state = {
      data:null,
      requestParams:{},
      load:false,
    }
  }
 
  callApi=(formData,inputText ,responseData)=>  {
    console.log('responseData',responseData);
    console.log('formData',formData);
    this.setState ({
      data:responseData,
      requestParams:formData,
    })
    console.log('data after set',this.state.data);
  }

   handleLoad(load) {
    this.setState ({
      load:load,
    })
  }
  render (){

    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {this.state.requestParams.method}</div>
          <div>URL: {this.state.requestParams.url}</div>
        <Form handleLoad={this.handleLoad} handleApiCall={this.callApi} />
        {this.state.load ? <BeatLoader load /> :  <Results data ={this.state.data} />}
        <Footer />
      </React.Fragment>
    );
  }

}

export default App;
