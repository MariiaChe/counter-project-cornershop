import React from 'react';
import ButtonMoreLess from '../buttonMoreLess/index';
import Grid from '@material-ui/core/Grid';
import './styles.css';
import Delete from '../../img/delete.png'

function Counter(props){

    return (
   <React.Fragment>
    <div className="counter">
       
        <Grid xs={5}>
            <div className="counter-name">
                <div className="dot">
                </div>
                <p>{props.names}</p>
            </div>
        </Grid>
        <Grid xs={4}
        >
           <ButtonMoreLess/>
        </Grid>
        <Grid xs={3}>
            <button className="delete">
                <img src={Delete}/>
            </button>
        </Grid>
    </div>
    <hr/>
    </React.Fragment>
    )
}
export default Counter;