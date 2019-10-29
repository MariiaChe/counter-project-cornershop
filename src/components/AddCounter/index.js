import React, { Component } from 'react';
import './styles.css';
import '../buttonMoreLess/index'

import ButtonApply from '../buttonApply/index';
// import Page from './page'
 
class AddCounter extends Component {
    constructor(props){
        super(props);
        this.state={
            query:'',
            count: 0
           }
           this.handleChange=this.handleChange.bind(this);
           this.addPost=this.addPost.bind(this);
    }
    handleChange (e) {    
        this.setState({query:e.target.value})
   
    };
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
        }).then(response => {
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })
    }
    render(){
        return (
            <div className="add-counter container">
                <div className="col-12">
                    <p>
                        Add new counter:   
                    </p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <input type="text" placeholder="  Put name..." onChange={(e)=>this.handleChange(e)} />
                        </div> 
                        {/* <div className="col-md-4 col-6">
                            <ButtonMoreLess idBML="btn-add-counter"/>
                        </div>  */}
                        <div className="col-3">
                            <ButtonApply idBa="btn-add-new-counter" addPost={this.addPost} text="Add" />
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}
export default AddCounter;