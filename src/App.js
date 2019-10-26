import React from 'react';
import IAppBar from './components/appBar/index';
import FilterBar from './components/filterBar/index' 
import './App.css';

function App() {
  return (
    <React.Fragment>
      <IAppBar/>
      <FilterBar/>
    </React.Fragment>
  );
}

export default App;
