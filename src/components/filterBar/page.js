import React, { Component } from 'react';
import ButtonMoreLess from '../buttonMoreLess/index';
import ButtonApply from '../buttonApply/index';
import More from '../../img/morethan.png';
import Less from '../../img/lessthan.png'

import './styles.css'

class Page extends Component{
  
    render(){
    return (
       
        <div className="filter-bar container">
            
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
                                    <div className="row">
                                        <input type="radio" name="gender" value="more" className="form-radio"/>
                                        <img src={More}/>
                                    </div>
                                    <div className="row">
                                        <input type="radio" name="gender" value="less" className="form-radio"/>
                                        <img src={Less}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div>
                                    <ButtonMoreLess idBML={this.props.idBML} /> 
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
    )
    }
}
export default Page;