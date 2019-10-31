import React, { Component } from 'react';
import './styles.css'
class ButtonMoreLess extends Component{
    constructor(props){
        super(props) 
        this.state={
          quantity:0,
          isFilter:false
        }
        this.add=this.add.bind(this)
        this.subtract=this.subtract.bind(this)
       
    }
    subtract(id){
        if(id!=="id-BML"){
            this.props.subtractCount(this.props.id)
      
        }else{
            this.setState({
                quantity:this.state.quantity-1
            })
            this.setState({
                isFilter:true
            })
            
        }
    }
    add(id){
        if(id!=="id-BML"){
            this.props.addCount(this.props.id)
      
        }else{
            this.setState({
                quantity:this.state.quantity+1
            })
            this.setState({
                isFilter:true
            })
        }
        
    }
    render(){
        return(
            <div key={this.props.idBML} className="BtnMoreLess">
                <div onClick={()=>this.subtract(this.props.idBML)} className="less"><p>-</p></div>
                {this.state.isFilter?
                <input  type="number" value={this.state.quantity} />:
                <input  type="number" value={this.props.count} />
                }
               
                <div onClick={()=>this.add(this.props.idBML)} className="more"><p>+</p></div>
            </div>  
        )
    }
}
export default ButtonMoreLess