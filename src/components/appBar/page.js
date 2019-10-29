import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './styles.css'

function Page(props){


    return (
       <AppBar style={{background:'black'}} position='sticky'>
           <Toolbar className="appBar">
            <Typography variant="h6">
                Team Count
            </Typography>   
           </Toolbar>
       </AppBar>
    )
}
export default Page;