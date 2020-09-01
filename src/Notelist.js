import React from 'react';
import Note from './Note';

export default function Notelist (props) {
    const { notes } = props;
    return ( <div className='notelist-js'>
        {notes.map(note => 
            <Note key={note.id} name={note.name} modified={note.modified} /> 
            )}    
        </div>
        );
}