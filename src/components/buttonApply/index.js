import React from 'react';
import './styles.css'
function ButtonApply(props){
    return(
       <button className="button-apply">{props.text}</button> 
    )
}
export default ButtonApply