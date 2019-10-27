import React from 'react';
import ButtonMoreLess from '../buttonMoreLess/index';

import './styles.css';
import Delete from '../../img/delete.png'

function Counter(props){

    return (
   <React.Fragment>
    <div className="counter row">
        <div className="col-5">
        <div className="counter-name">
            <div className="dot">
            </div>
            <p>{props.names}</p>
        </div>
        </div>
        <div className="col-5">
        <ButtonMoreLess />
        </div>
        <div className="col-2">
        <button className="delete">
            <img src={Delete}/>
        </button>
        </div>
    </div>
    <hr/>
    </React.Fragment>
    )
}
export default Counter;