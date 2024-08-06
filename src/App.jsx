
import React from "react";
import LineChart from "./components/Linechart";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <h1>Linechart React nima gap</h1>
      <LineChart data={data} />
    </div>
  );
}

export default App;
