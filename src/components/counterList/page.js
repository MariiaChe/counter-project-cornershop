import React from 'react';
import Grid from '@material-ui/core/Grid';
import './styles.css';
import Counter from '../counter/index'
function Page(props){


    return (
     <React.Fragment>
        <Grid container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={11} sm={9}>
                <Counter names="Tommy" />
            </Grid>
            <Grid item xs={11} sm={9}>
                <Counter names="Tommy" />
            </Grid>
            <Grid item xs={11} sm={9}>
                <Counter names="Tommy" />
            </Grid>
            <Grid item xs={11} sm={9}>
                <Counter names="Tommy" />
            </Grid>
            <Grid item xs={11} sm={9}>
                <Counter names="Tommy" />
            </Grid>
         
        </Grid>
     </React.Fragment>
    )
}
export default Page;