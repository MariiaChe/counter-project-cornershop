import React from 'react';

import './styles.css';
import Counter from '../counter/index'
function Page(props){


    return (
     
       <div className="counter-list container">
           <div>
                <p>
                    Team List:
                </p>
            </div>

                <Counter names="Tommy dser" />
         
   
                <Counter names="Tom" />
         
           
                <Counter names="Tommyw" />
        
            
                <Counter names="Tommy hyus" />
            
         
                <Counter names="Tommy cd" />
           
                </div>
      
  
    )
}
export default Page;