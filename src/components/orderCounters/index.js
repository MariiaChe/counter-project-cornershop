import React, { Component } from 'react';
import ButtonApply from '../buttonApply/index';
import AZ from '../../img/az.png'
import ZA from '../../img/za.png'
import Num12 from '../../img/12.png'
import Num21 from '../../img/21.png'
import './styles.css'

class OrderCounters extends Component{
    constructor(props){
        super(props);
        this.clearOrder=this.clearOrder.bind(this);
        this.applyOrder=this.applyOrder.bind(this)

    }
    clearOrder(){
        alert('clearorder')
    }
    applyOrder(){
        alert('applyorder')
    }
    render(){
        return( 
            <div className="add-counter container">
                <div className="col-12">
                    <p>
                        Order counters:   
                    </p>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-4">
                        <div className="row letters">
                            <input type="radio" name="gender" value="az" className="form-radio"/>
                            <img src={AZ} />
                        </div>
                        <div className="row letters">
                            <input type="radio" name="gender" value="za" className="form-radio"/>
                            <img src={ZA}/>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="row numbers">
                            <input type="radio" name="gender" value="12" className="form-radio"/>
                            <img src={Num12}/>
                        </div>
                        <div className="row numbers ">
                            <input type="radio" name="gender" value="21" className="form-radio"/>
                            <img src={Num21}/>
                        </div>
                    </div>            
                    <div className="btns-clear-apply col-4">
                        <div className="clear">
                            <ButtonApply idBA="btn-clear-order" handleClick={this.clearOrder}   text="Clear" />
                        </div>
                        <div className="clear">
                            <ButtonApply idBA="btn-apply-order" handleClick={this.applyOrder}  text="Apply" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default OrderCounters