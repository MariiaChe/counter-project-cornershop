import React, { Component } from 'react';
import IAppBar from './components/appBar/index';
import FilterBar from './components/filterBar/index';
import CounterList from './components/counterList/index';
import './App.css';
import AddCounter from './components/AddCounter';

class App extends Component{
    constructor(props){
          super(props);
          this.state={
              query:'',
            }
          this.handleChange=this.handleChange.bind(this);
          this.addPost=this.addPost.bind(this);
    }
    // from AddCounter
  handleChange (e) {    
      this.setState({query:e.target.value})
  };
   // from AddCounter
  addPost(){
    fetch('http://localhost:3000/api/v1/counter',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
                    'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title:this.state.query
           
        })
    })
    .then(response => {
        console.log(response)
    })
    .catch(error =>{
        console.log(error)
    })
  }

  
render(){
    return (
      <React.Fragment>
        <IAppBar/>
        <div className="container app">
          <div className="row">
            <div className="col-12 col-md-6 filter-addcounter">
              <FilterBar/>
              <AddCounter addPost={this.addPost} handleChange={this.handleChange}/>
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
