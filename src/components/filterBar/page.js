import React from 'react';
import ButtonMoreLess from '../buttonMoreLess/index';
import ButtonApply from '../buttonApply/index';
import Grid from '@material-ui/core/Grid'
import './styles.css'

function Page(props){
    const clearStyle = {
        marginLeft:"30px",
        marginBottom:"10px"
    }
    
    return (
       
        <div className="filter-bar">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className="text">
                        <p>Filter members per count´s number:</p>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="filter">
                        <Grid item xs={4}>
                        <div className="radio-buttons">
                            <div>
                                <input type="radio" name="gender" value="more" className="form-radio"/><label for="radio-one">More then</label>
                            </div>
                            <div>
                                <input style={{marginRight:"9px"}} type="radio" name="gender" value="less" className="form-radio"/><label for="radio-one">Less then</label>
                            </div>
                        </div>
                        </Grid>
                        <Grid item xs={4}>
                        <div className="button-more-less">
                            <ButtonMoreLess /> 
                        </div>
                        </Grid>
                        <Grid item xs={4}>
                        <div className="apply">
                            <div  style={clearStyle}>
                                <ButtonApply  text="Clear"/>
                            </div>
                            <div style={clearStyle} >
                                <ButtonApply  text="Ok!"/>
                            </div>
                        </div>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
       
    )
}
export default Page;