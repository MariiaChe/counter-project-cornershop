import React, { Component, Fragment } from 'react';
import Page from './page'

class CounterList extends  Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){

        fetch(`http://localhost:3000/api/v1/counters`)
        .then(response=> response.json())
        .then(data =>console.log(data))
        .catch(error=>console.log('parsing failed', error))
      }
    render(){
        return(
            
                <Page/>
          
        )
    }
}
export default CounterList;