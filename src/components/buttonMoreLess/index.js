import React, { Component } from 'react';
import './styles.css'
class ButtonMoreLess extends Component{
    constructor(props){
        super(props) 
        this.state={
          quantity:0
        }
        this.sumar=this.add.bind(this)
        this.restar=this.subtract.bind(this)
       
    }
    subtract(){
        this.setState({
            quantity:this.state.quantity-1
        })

    }
    add(){
        this.setState({
            quantity:this.state.quantity+1
        })
    }
    render(){
        return(
            <div key={this.props.idBML} className="BtnMoreLess">
                <div onClick={()=>this.subtract()} className="less"><p>-</p></div>
                <input  type="number" value={this.props.count} />
                <div onClick={()=>this.add()} className="more"><p>+</p></div>
            </div>  
        )
    }
}
export default ButtonMoreLess