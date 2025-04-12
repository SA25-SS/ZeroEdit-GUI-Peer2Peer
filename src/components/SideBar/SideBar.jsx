// src/components/SideBar/SideBar.jsx

//Import the React Framework
import React from "react";

// Importing CSS and Bootstrap
import { Row, Col} from 'react-bootstrap';

import Toolbar from './Toolbar'
import RecentFiles from './RecentFiles'
import ActiveUsers from './ActiveUsers'
import Settings from './Settings'

import './SideBar.css';


const SideBar = ({colSize = 2}) => {
    return (
        <Col xs={colSize} >
            <Toolbar />
            <RecentFiles />
            <ActiveUsers />
            <Settings />
        </Col>
    );
}

export default SideBar;