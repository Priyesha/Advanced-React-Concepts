import React from 'react';
import ReactDOM from 'react-dom'

function Portal() {
    return ReactDOM.createPortal(
        <div>
            <h2>Portal</h2>
        </div>,
    document.getElementById('portal-root'))
}

export default Portal