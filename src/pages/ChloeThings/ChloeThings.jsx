import React from 'react';
import ChloeThing from '../../components/ChloeThings/ChloeThing'

const ChloeThings = (props) => {
    return ( 
            <>
      <h1>Chloe's Things</h1>
      {props.chloesThings.map((thing, idx) => 
        <ChloeThing 
          key={idx}
          thing={thing}
        />
       )}

    </>
    );
}
 
export default ChloeThings;