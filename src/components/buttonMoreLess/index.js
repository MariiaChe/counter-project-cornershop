import React, { Component } from 'react';
import './styles.css'
class ButtonMoreLess extends Component{
    render(){
        return(
            <div className="BtnMoreLess">
                <div className="less"><p>-</p></div>
                <input  type="number" value="0"/>
                <div className="more"><p>+</p></div>
            </div>  
        )
    }
}
export default ButtonMoreLess