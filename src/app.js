import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
    };
  }

  callApi = (requestParams, inputData) => {
    // mock output
    const data = {
      Headers: requestParams.headers,
      count:requestParams.data.count ,
      results:requestParams.data.results,

    };
    this.setState({data,requestParams});
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <div>Request Method: {this.state.requestParams.method}</div>
        <div>URL: {this.state.requestParams.url}</div> */}
        <Form data-testid="myform" handleApiCall={this.callApi} />
        <Results data={this.state.data} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
