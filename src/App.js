import React from "react";
import FirstVote from "./FirstVote";

import "./App.scss";

const App = props => {
  return (
    <div className="App container">
      <h1 className="header__name">Caucus Unbroke</h1>
      <FirstVote />
    </div>
  );
};

export default App;
