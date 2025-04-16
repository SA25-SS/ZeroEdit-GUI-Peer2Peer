// src/components/SideBar/SideBar.jsx

//Import the React Framework
import React, { useState } from "react";

// Importing CSS and Bootstrap
import { Row, Col, Modal} from 'react-bootstrap';

import Toolbar from './Toolbar'
import RecentFiles from './RecentFiles'
import ActiveUsers from './ActiveUsers'
import SettingsButton from './SettingsButton'

import SettingsPanel from "./SettingsPanel"
import PermissionsPopup from "./PermissionsPopup"

import './SideBar.css';

function SettingsPopup({ show, handleClose, currentSettings, handleSaveSettings }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <SettingsPanel savedSettings={currentSettings} saveNewSettings={handleSaveSettings}/>
        </Modal>
    );
}

const SideBar = ({colSize = 2, globalThemeDark, openFileName}) => {
    const [showSettingsPopup, setShowSettingsPopup] = useState(false);
    const handleOpenSettings = () => setShowSettingsPopup(true);
    const handleCloseSettings = () => setShowSettingsPopup(false);

    const [selectedUser, setSelectedUser] = useState();
    const [showPermissionsPopup, setShowPermissionsPopup] = useState(false);
    const handleOpenPermissions = (index) => {
        setSelectedUser(index);
        setShowPermissionsPopup(true);
    };

    const handleClosePermissions = () => {
        setShowPermissionsPopup(false)
        setSelectedUser();
    };
    
    const [settings, saveSettings] = useState({
        confirmBeforeSave:  true,
        maxUsers         :  5,
        defaultPermissions: {
            read: true,
            write: true,
            execute: true,
        }
    })

    //TODO : Add the UserList Here, with Owner and selfIndex states.
    
    return (
        <Col xs={colSize} >
            <Toolbar globalThemeDark={globalThemeDark}/>
            <RecentFiles openFileName={openFileName} />
            <ActiveUsers handleOpenPermissions={handleOpenPermissions}/>
            <SettingsButton handleClick={handleOpenSettings}/>

            <PermissionsPopup 
                show={showPermissionsPopup}
                onHide={handleClosePermissions}
                modalSize={"md"}
                selectedUser={selectedUser}
            />

            {/* Modal for Settings Popup */}
            <SettingsPopup 
                show={showSettingsPopup}
                handleClose={handleCloseSettings}

                currentSettings={settings}
                handleSaveSettings={saveSettings}
            />
        </Col>
    );
}

export default SideBar;