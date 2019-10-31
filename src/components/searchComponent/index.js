import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import './styles.css';
import Delete from '../../img/delete2.png'

class SearchComponent extends Component {
   

    render(){
       
        return (
            <div className="main-container">
                <div className="container-icon">
                    <SearchIcon/>
                </div>
                <InputBase
                    value={this.props.inputValue}
                    onChange={(e)=>this.props.handleChange(e)} 
                    onKeyPress={(e)=>this.props.handleKeyPress(e)}
                    placeholder="Search name.."
                    style={{width:'100%'},{color:'white'}}
  
                    
                />
                <div onClick={this.props.handleClick} className="delete-icon">
                    <img src={Delete}/>
                </div>
                
            </div> 
        )
    }
  

}
export default SearchComponent;
