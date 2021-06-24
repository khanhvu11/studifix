import React from 'react'

export default function Error(props) {
    return (
        <div className='error'>
            <p>{props.error}</p>
        </div>
    )
}
