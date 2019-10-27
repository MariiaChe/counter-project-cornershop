import React from 'react';
import IAppBar from './components/appBar/index';
import FilterBar from './components/filterBar/index';
import CounterList from './components/counterList/index';
import './App.css';
import AddCounter from './components/AddCounter';

function App() {
  return (
    <React.Fragment>
      <IAppBar/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <CounterList/>
          </div>
          <div className="col-12 col-md-6">
            <FilterBar/>
            <AddCounter/>
          </div>
        </div>
      </div>
      
    </React.Fragment>
  );
}

export default App;
