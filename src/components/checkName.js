import React from 'react';

function CheckName(props) {
    if(props.name !== 'Priyesha') {
        throw new Error();
    }

    return (
    <div>{props.name}</div>
    )

}

export default CheckName;