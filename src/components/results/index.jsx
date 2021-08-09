import React from 'react';
import './results.scss';
import JSONPretty from 'react-json-pretty';

function Results (props){
  console.log(props);

  return (
    <section >
      <pre data-testid="result">{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>

    </section>
    // <div data-testid="result" >
    //   {props.data &&
    //   <>
    //   "Headers : "
    //   <JSONPretty data ={props.data.headers} />

    //   "Count : "
    //   <JSONPretty data ={props.data.count} />

    //   "Results : "
    //   <JSONPretty data ={props.data.results} />
    //   </>
    //   }
    // </div>
  );

}

export default Results;
