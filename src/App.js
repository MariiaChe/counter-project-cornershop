import React from 'react';
import IAppBar from './components/appBar/index';
import FilterBar from './components/filterBar/index';
import CounterList from './components/counterList/index';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <IAppBar/>
      <FilterBar/>
      <CounterList/>
    </React.Fragment>
  );
}

export default App;
