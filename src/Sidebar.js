import React from 'react';
import { Route } from 'react-router-dom';

import FolderSidebar from './sidebar/FolderSidebar';
import MainSidebar from './sidebar/MainSidebar';
import NoteSidebar from './sidebar/NoteSidebar';

export default function Sidebar (props) {
    return (
        <div className='sidebar'>
            Sidebar CONTENT
            <Route exact path='/' component={MainSidebar} />
            <Route exact path='/folder' component={FolderSidebar} />
            <Route path='/folder/note' component={NoteSidebar} />
        </div>
    );
}