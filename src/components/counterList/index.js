import React, { Component, Fragment } from 'react';
import './styles.css';
import SearchComponent from '../searchComponent/index';
import Counter from '../counter/index';
import Pikachu from '../../img/detective-pikachu.png'
// import Page from './page'

class CounterList extends  Component {
    constructor(props){
        super(props);
        this.state={
            counters:[],
            query:'',
            hasRes:true,
            totalCount:0
           
        }
        this.clearSearchComponent=this.clearSearchComponent.bind(this)
        this.searchCounter=this.searchCounter.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.showCounterList=this.showCounterList.bind(this)
        this.deleteCounter=this.deleteCounter.bind(this)
        this.subtractCount=this.subtractCount.bind(this)
        this.addCount=this.addCount.bind(this);
        this.calculeTotalCount=this.calculeTotalCount.bind(this);
    }
    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/counters`)
        .then(response=> response.json())
        .then(data =>this.setState({counters:data}))
        .then(data=>this.calculeTotalCount(this.state.counters))
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
            console.log(newCounters)
            for( let i = 0; i<newCounters.length; i++){
                if ( newCounters[i].id === idCounter){
                    this.setState({totalCount:this.state.totalCount-newCounters[i].count})
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
            .then(res => res.json())
            .then(res=>{
                var counters=this.state.counters;
                counters.map((counter, index)=>{
                    if(counter.id === res.id){
                       counter.count = res.count
                    }
                })
                this.setState({
                      counters:counters
                }) 
                this.setState({
                    totalCount:this.state.totalCount-1
                })  
            })
            .catch(error=>console.log('parsing failed', error))
    }
    addCount(idCounter){
        console.log(idCounter)
        fetch('http://localhost:3000/api/v1/counter/inc', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({id: idCounter})
            })
            .then(res => res.json())
            .then(res=>{
                var counters=this.state.counters;
                counters.map((counter, index)=>{
                    if(counter.id === res.id){
                       counter.count = res.count
                    }
                })
                this.setState({
                      counters:counters
                })
                this.setState({
                    totalCount:this.state.totalCount+1
                })  
            })
            .catch(error=>console.log('parsing failed', error))
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
        if(newCounters.length===0){
            this.setState({hasRes:false})
        }
    }
    clearSearchComponent(){
        this.setState({query:''})
        this.setState({hasRes:true})
        this.componentDidMount();
    }
    calculeTotalCount(counters){
       var result = this.state.totalCount
       for(let i = 0; i < counters.length; i++){
           result = result + counters[i].count
       }
       this.setState({totalCount:result})
    }
    render(){
        // console.log(this.state.counters)
        return (
            <div className="counter-list container">
                <div className="row search-bar">
                    <div className="col-5">
                     <p>
                        Total Count: {this.state.totalCount}
                     </p>
                     </div>
                     <div className="col-7">
                      <SearchComponent inputValue={this.state.query} handleClick={this.clearSearchComponent} handleChange={this.handleChange} handleKeyPress={this.handleKeyPress}/>
                     </div>
                 </div>
                 <div className="row count-list">
                     <div className="col-12">
                         <p>Count list</p>
                     </div>
                 </div>
                    {this.state.hasRes?
                    this.showCounterList():
                    <div className="pikachu">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <p>
                                We could not find this name ... try again or add it to the list
                                </p>
                            </div>
                            <div className="col-12 col-md-6">
                                <img className="img-fluid" src={Pikachu}/>
                            </div>
                        </div>
                    </div>

                }
            </div>
        )
    }
}
export default CounterList;