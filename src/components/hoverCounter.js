import React from 'react';
import UpdatedComponent from './hocComponent';


function HoverComponent({count, incrementCount}) {
    return (
        <div>
            <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
        </div>
    )
}

export default  UpdatedComponent(HoverComponent);