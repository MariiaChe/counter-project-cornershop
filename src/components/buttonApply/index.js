import React, {Component} from 'react';
import './styles.css'
class ButtonApply extends Component{
    constructor(props){
        super(props);
       
    }
   
    render(){
    return(
       <button key={this.props.idBA} onClick={this.props.handleClick}  className="button-apply">{this.props.text}</button>
    )
    }
}
export default ButtonApply