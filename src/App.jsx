// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ArticlesContainer from "./containers/ArticlesContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <ArticlesContainer />
      </div>
    </Router>
  );
}

export default App;
