import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './styles.css'
import SearchComponent from '../searchComponent/index';
import Filter from '../../img/filter.png';
import Logo from '../../img/logo.png';
function Page(props){


    return (
       <AppBar style={{background:'black'}} position='sticky'>
           <Toolbar className="appBar">
                <img className="logo" src={Logo}/>
                <SearchComponent/>
                <div className="filter">
                   <img src={Filter} /> 
                </div>  
           </Toolbar>
       </AppBar>
    )
}
export default Page;