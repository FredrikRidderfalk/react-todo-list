import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
  module.hot.accept();
}

function App() {
  return (
    <div>
      <h1>Hello habibi!!!</h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
