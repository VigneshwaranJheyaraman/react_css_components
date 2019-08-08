import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import SliderDiv from "./components/SliderDiv";
import Clock from "./components/Clock";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <SliderDiv content="Hi there" className="sliderDiv" />
      <SliderDiv content="Hi there1" className="sliderDiv" />
      <SliderDiv content="Hi there2" className="sliderDiv" />
      <SliderDiv content="Hi there3" className="sliderDiv" />
      <Clock className="clock" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
