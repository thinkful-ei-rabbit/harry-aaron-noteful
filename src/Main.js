import React from 'react';
import Notelist from './Notelist';

export default function Main (props) {
    console.log(props);

    return (
        <div className='main'>
            <Notelist notes={props.notes} />
        </div>
    );
}