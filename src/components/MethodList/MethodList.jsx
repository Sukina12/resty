import React from "react";
import { useState } from "react";

function MethodList(props) {
  const [methodsData, setMethodsData] = useState(
    JSON.parse(localStorage.getItem('memory')) || []
  );

  return (
    <div className='List'>
      <h2>MethodsMemory :</h2>
      {methodsData.map((item, idx) => (
        <div>
          <button
            className={item.method}
            key={idx}
            // onClick={fetch}
            // ref={node => (inputNode = node)}
          >
            {item.method}
          </button>
          <p >{item.url}</p>
        </div>
      ))}
    </div>
  );
}

export default MethodList;
