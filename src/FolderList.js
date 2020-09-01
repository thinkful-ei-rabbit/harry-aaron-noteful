import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom'
import Folder from './Folder';

export default function folderList(props) {
    const { folders } = props;
    return (
        <div className='sideBar'>
            <h1>Folder List</h1>
            {folders.map(folder => <Folder key={folder.id} name={folder.name} />)}
        </div>
    )
}

folderList.defaultProps = {
    folders:[]
};