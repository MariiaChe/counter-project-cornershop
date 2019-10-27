import React from 'react';
import './styles.css';
import '../buttonMoreLess/index'
import ButtonMoreLess from '../buttonMoreLess/index';
import ButtonApply from '../buttonApply/index';


function Page(props){
  
    
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
                        <input placeholder="  Put name..."/>
                    </div> 
                    <div className="col-md-4 col-6">
                        <ButtonMoreLess/>
                    </div> 
                    <div className="col-md-3 col-6">
                        <ButtonApply text="Add" />
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default Page;