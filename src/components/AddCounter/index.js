import React, { Component } from 'react';
import Page from './page'

class AddCounter extends Component {
    constructor(props){
        super(props);
        this.state={
            query:'',

           }
           this.handleChange=this.handleChange.bind(this);
        
            this.addPost=this.addPost.bind(this)

    }
    handleChange (e) {    
        this.setState({query:e.target.value})
   
    };
    addPost(){
        console.log(this.state.query)
        fetch('http://localhost:3000/api/v1/counter',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                        'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title:this.state.query
            })
        }).then(response => {
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })
    }
    render(){
        return(
            <Page handleChange={this.handleChange} addPost={this.addPost} />
        )
    }
}
export default AddCounter;