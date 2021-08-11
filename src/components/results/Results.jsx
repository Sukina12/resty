import React from 'react';
import './results.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

function Results (props){
  console.log('resultData',props.data);

  return (
    <div data-testid="result"  >
      { props.data &&
      <>
       "count : "
       <JSONPretty data ={props.data.count} />
       "headers : "
       <JSONPretty data ={props.data.headers}/> 
       "results : "
       <JSONPretty data ={props.data.results} />
       </>
      }
      
     

    </div>
  );

}

export default Results;
