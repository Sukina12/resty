import React from "react";

function History(props) {
  return (
    <div className="List">
      <h2>MethodsMemory :</h2>
      {props.history.map((item, idx) => {
        return (
          <ul>
            <span className={item.method} key={idx}>
              {item.method.toUpperCase()}
            </span>
            <p>{item.url}</p>
          </ul>
        );
      })}
    </div>
  );
}

export default History;
