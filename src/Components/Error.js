import React from 'react'

export default function Loader({ msg = 'ERROR' }) {
    return (
        <div>
            <h1>
                {msg} ...
            </h1>
        </div>
    )
}
