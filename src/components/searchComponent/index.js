import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import './styles.css';

class SearchComponent extends Component {
   

    render(){
       
        return (
            <div className="main-container">
                <div className="container-icon">
                    <SearchIcon/>
                </div>
                <InputBase
                    placeholder="Search name.."
                    style={{width:'100%'},{color:'white'}}
  
                    
                />
                
            </div> 
        )
    }
  

}
export default SearchComponent;
