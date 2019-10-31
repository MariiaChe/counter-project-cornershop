import React, { Component, Fragment } from 'react';
import './styles.css';
import SearchComponent from '../searchComponent/index';
import Counter from '../counter/index'
// import Page from './page'

class CounterList extends  Component {
    constructor(props){
        super(props);
        this.state={
            counters:[],
            query:''
           
        }
        this.clearSearchComponent=this.clearSearchComponent.bind(this)
        this.searchCounter=this.searchCounter.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.showCounterList=this.showCounterList.bind(this)
        this.deleteCounter=this.deleteCounter.bind(this)
        this.subtractCount=this.subtractCount.bind(this)
        this.addCount=this.addCount.bind(this)
    }
    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/counters`)
        .then(response=> response.json())
        .then(data =>this.setState({counters:data}))
        .catch(error=>console.log('parsing failed', error))
    }
    showCounterList(){
        return(
            this.state.counters.map((counter, index)=>{
                return(
                <Counter idBML={`BML`+ counter.id} addCount={this.addCount} subtractCount={this.subtractCount} id={counter.id} deleteCounter={this.deleteCounter} count={counter.count} names={counter.title} key={counter.id}/>
                )
            })
        )
    }
    deleteCounter(idCounter){
        // delete from api
        console.log(idCounter)
        fetch('http://localhost:3000/api/v1/counter', {
            method: 'DELETE',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({id: idCounter})
            })
            .then(res => res.json()) // OR res.json()
            
         //delete from component
            let newCounters = [...this.state.counters];
            for( let i = 0; i<newCounters.length; i++){
                if ( newCounters[i].id === idCounter){
                    newCounters.splice(i, 1);
                   
                }
            }
            this.setState({counters:newCounters});   
    }
    subtractCount(idCounter){
        fetch('http://localhost:3000/api/v1/counter/dec', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({id: idCounter})
            })
            .then(this.componentDidMount())
            .catch(error=>console.log('parsing failed', error))
    }
    addCount(idCounter){
        console.log(idCounter)
        fetch('http://localhost:3000/api/v1/counter/inc', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({id: idCounter})
            })
            // .then(res => res.json()) // OR res.json()
            .then(this.componentDidMount())
      

    }
    handleChange (e) {   
        console.log(e.target.value) 
        this.setState({query:e.target.value})
        
    };
    handleKeyPress(e) {
        if (e.key === 'Enter') {
        
          console.log('enter key pressed', this.state.query)
          
            this.searchCounter(this.state.query)
        }
    }
    searchCounter(name){
        const Counters = this.state.counters
        const newCounters = Counters.filter(function(counter){
            return counter.title === name
        })
        this.setState({counters:newCounters})
    }
    clearSearchComponent(){
        this.setState({query:''})
        this.componentDidMount();
    }
    render(){
        // console.log(this.state.counters)
        return (
            <div className="counter-list container">
                <div className="row search-bar">
                    <div className="col-4">
                     <p>
                         Team List
                     </p>
                     </div>
                     <div className="col-8">
                     <SearchComponent inputValue={this.state.query} handleClick={this.clearSearchComponent} handleChange={this.handleChange} handleKeyPress={this.handleKeyPress}/>
                     </div>
                 </div>
                    {this.showCounterList()}
                 </div>
        )
    }
}
export default CounterList;