import React from 'react';
import withCounter from './hocComponent';


function HoverComponent({count, incrementCount}) {
    return (
        <div>
            <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
        </div>
    )
}

export default  withCounter(HoverComponent, 5);