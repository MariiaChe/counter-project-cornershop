import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Pika from '../../img/pika.png'
import './styles.css'

function Page(props){


    return (
       <AppBar style={{background:'black'}} position='sticky'>
           <Toolbar className="appBar">
               <img src={Pika}/>
            <Typography variant="h6">
                Team Count
            </Typography>   
           </Toolbar>
       </AppBar>
    )
}
export default Page;