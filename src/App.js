import React, { Component } from 'react';
import IAppBar from './components/appBar/index';
import FilterBar from './components/filterBar/index';
import CounterList from './components/counterList/index';
import './App.css';
import AddCounter from './components/AddCounter';
import OrderCounters from './components/orderCounters/index'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      showFilter:true,
      showOrder:false,
      showAdd:false
    }
  }
  toggleButtons(string){
    if(string==="filter"){
      this.setState({showFilter:true})
      this.setState({showOrder:false})
      this.setState({showAdd:false})
    }else if(string==="order"){
      this.setState({showFilter:false})
      this.setState({showOrder:true})
      this.setState({showAdd:false})
    }else if(string==="add"){
      this.setState({showFilter:false})
      this.setState({showOrder:false})
      this.setState({showAdd:true})
    }
  }
  render(){
      return (
          <React.Fragment>
            <IAppBar/>
            <div className="container app">
              <div className="row">
                <div className="col-12 col-md-6 filter-addcounter">
                  <div className="row">
                    <div className="btns col-4">
                      <button onClick={()=>{this.toggleButtons('filter')}}>Filter</button>
                    </div>
                    <div className="btns col-4">
                      <button onClick={()=>{this.toggleButtons('order')}} >Order</button>
                    </div>
                    <div className="btns col-4">
                      <button onClick={()=>{this.toggleButtons('add')}}>Add</button>
                    </div>
                  </div>
                  <div className="row">
                    {
                      this.state.showFilter?
                      <div className="col-12 filter-container"><FilterBar/></div>:
                      null
                    }
                    {
                      this.state.showOrder?
                      <div className="col-12 order-container"><OrderCounters/></div>:
                      null
                    }
                    {
                      this.state.showAdd?
                      <div className="col-12 add-container"><AddCounter/></div>:
                      null
                    }
                    
                  </div>
                </div>
                <div className="col-12 col-md-6 counterlist">
                  <CounterList/>
                </div>  
              </div>
            </div>
          </React.Fragment>
      );
    }
}

export default App;
