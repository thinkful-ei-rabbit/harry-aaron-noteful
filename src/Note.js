import React from 'react';

export default function Note (props) {
    
    return (
        <div className="note-js">
            <h3>{props.name}</h3>
            <p>Note last modified: {props.modified}</p>
            <button>DELETE</button>
        </div>
    )
}