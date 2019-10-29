import React, {Component} from 'react';
import './styles.css'
class ButtonApply extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this)
    }
   handleClick(){
    
   }
    render(){
    return(
       <button key={this.props.idBA}  className="button-apply">{this.props.text}</button>
    )
    }
}
export default ButtonApply