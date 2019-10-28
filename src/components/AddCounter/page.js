import React, { Component } from 'react';
import './styles.css';
import '../buttonMoreLess/index'
import ButtonMoreLess from '../buttonMoreLess/index';
import ButtonApply from '../buttonApply/index';


class Page extends Component{
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

                    <div className="col-md-5 col-12">
                        <input type="text" placeholder="  Put name..." onChange={(e)=>this.props.handleChange(e)} />
                    </div> 
                    <div className="col-md-4 col-6">
                        <ButtonMoreLess idBML="btn-add-counter"/>
                    </div> 
                    <div className="col-md-3 col-6">
                        <ButtonApply idBa="btn-add-new-counter" addPost={this.props.addPost} text="Add" />
                    </div> 
                </div>
            </div>
        </div>
    )
}
}
export default Page;