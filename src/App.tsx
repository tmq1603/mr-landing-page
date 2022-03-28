import React from "react";
import "./App.scss";
import routing from '@/routes'

function App() {
  return (
    <div className="App">
      {routing()}
    </div>
  );
}

export default App;
