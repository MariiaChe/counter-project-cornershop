// import React, { Component } from 'react';

// import './styles.css';
// import Counter from '../counter/index'
// class Page extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         counters:[]
    //     }
    //     this.showCounterList=this.showCounterList.bind(this)
    //     this.deleteCounter=this.deleteCounter.bind(this)
    // }
    // componentDidMount(){
    //     fetch(`http://localhost:3000/api/v1/counters`)
    //     .then(response=> response.json())
    //     .then(data =>this.setState({counters:data}))
    //     .catch(error=>console.log('parsing failed', error))
    //   }
    // showCounterList(){
    //     return(
    //         this.state.counters.map((counter, index)=>{
    //             return(
    //             <Counter id={counter.id} deleteCounter={this.deleteCounter} count={counter.count} names={counter.title} key={counter.id}/>
    //             )
    //         })
    //     )
    // }
    // deleteCounter(idCounter){
    //     fetch('http://localhost:3000/api/v1/counter', {
    //         method: 'DELETE',
    //         headers: {'content-type': 'application/json'},
    //         body: JSON.stringify({id: idCounter})
    //         })
    //         .then(res => res.text()) // OR res.json()
    //         .then(res => console.log(res))
    // }
    // render(){
        // console.log(this.state.counters)
    // return (
     
    //    <div className="counter-list container">
    //        <div>
    //             <p>
    //                 Team List:
    //             </p>
    //         </div>
    //            {this.showCounterList()}
    //         </div>
      
  
    // )
// }
// }
// export default Page;