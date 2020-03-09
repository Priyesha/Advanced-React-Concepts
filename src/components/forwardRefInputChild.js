import React from 'react'

const ForwardRefInputChild = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref}></input>
        </div>
    )
})

export default ForwardRefInputChild
