import React from 'react'
import WillThing from '../../components/WillThing/WillThing'

const WillsThings = (props) => {
    return ( 
        <>
          <h1>Will's Things</h1>
          {props.willsThings.map((thing, idx) => 
            <WillThing 
              key={idx}
              thing={thing}
            />
          )}
    
        </>
       );
    }
export default WillsThings