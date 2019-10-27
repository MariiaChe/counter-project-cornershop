import React from 'react';
import ButtonMoreLess from '../buttonMoreLess/index';
import ButtonApply from '../buttonApply/index';

import './styles.css'

function Page(props){
  
    
    return (
       
        <div className="filter-bar">
            <div className="container">
                <div className="row">
                    <div className="text">
                        <p>Filter members per count´s number:</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="filter">
                            <div className="col-4">
                                <div className="radio-buttons">
                                    <div className="row"><input type="radio" name="gender" value="more" className="form-radio"/><p for="radio-one">More</p></div>
                                    <div className="row">
                                        <input type="radio" name="gender" value="less" className="form-radio"/><p for="radio-one">Less</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div>
                                    <ButtonMoreLess /> 
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="clear">
                                    <ButtonApply  text="Clear"/>
                                </div>
                                    <ButtonApply  text="Apply"/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}
export default Page;