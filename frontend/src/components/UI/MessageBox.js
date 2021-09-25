import React from 'react'

const MessageBox = (props) => {
    return (
        <div className={`center alert alert-${props.variant || 'info'}`} >
            {props.children}
        </div>
    )
}

export default MessageBox
