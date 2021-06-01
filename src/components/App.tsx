import React from "react";

import { Filter } from "./Filter";
import { GridData } from "./GridData";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Filter />
        <GridData />
      </header>
    </div>
  );
};

export default App;
