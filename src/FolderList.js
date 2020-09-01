import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom'

export default function folderList(props) {
    const countNotesForFolder = (notes=[], folderId) => notes.filter(note => note.folderId === folderId).length
    return (

        <div className='sideBar'>
            <h1>Folder List</h1>
            <ul > 
            {props.folders.map(folder =>
             <li 
            key={folder.id}> 
            <NavLink 
            to={`/folder/${folder.id}`} > 
            <span className='NoteListNav__num-notes'> 
            {countNotesForFolder(props.notes, folder.id)} </span> 
            {folder.name} </NavLink> </li> )} 
            </ul>
    </div >
)
}

folderList.defaultProps={folders:[]};