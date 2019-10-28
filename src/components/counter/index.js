import React, {Component } from 'react';
import ButtonMoreLess from '../buttonMoreLess/index';

import './styles.css';
import Delete from '../../img/delete.png'

class Counter extends Component{
 render(){
    return (
   <React.Fragment>
    <div className="counter row">
        <div className="col-5">
            <div className="counter-name">
                <div className="dot">
                </div>
                <p>{this.props.names}</p>
            </div>
        </div>
        <div className="col-5">
            <ButtonMoreLess count={this.props.count} />
        </div>
        <div className="col-2">
            <button onClick={()=>this.props.deleteCounter(this.props.id)} className="delete">
                <img src={Delete}/>
            </button>
        </div>
    </div>
    <hr/>
    </React.Fragment>
    )
}
}
export default Counter;