// src/components/MainScreen/CodeEditor.jsx

//Import the React framework
import React, { useState } from 'react';

// Importing components
import CodeEditor from './CodeEditor';
import Header from './Header';

import DarkModeSettings from "./DarkModeSettings"

import { Row, Col, Modal } from 'react-bootstrap';

import './MainScreen.css';

function DarkModeSettingsPopup({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <DarkModeSettings onHide={handleClose}/>
        </Modal>
    );
}

//TODO : Move to New Component
function ShareLinkPopup({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <div className='container'>
                <div className="row p-5">
                    Container for Link Sharing
                </div>
            </div>
        </Modal>
    );
}

const MainScreen = ({ colSize = 10}) => {
    // Dark Mode Settings Popup Modal Configuration
    const [darkModeSettingsPopup, setShowDarkModeSettingsPopup] = useState(false);
    const handleOpenDarkModeSettings = () => setShowDarkModeSettingsPopup(true);
    const handleCloseDarkModeSettings = () => setShowDarkModeSettingsPopup(false);

    // Share Link Popup Modal Configuration
    const [shareLinkPopup, setShowShareLinkPopup] = useState(false);
    const handleOpenShareLink = () => setShowShareLinkPopup(true);
    const handleCloseShareLink = () => setShowShareLinkPopup(false);
    
    const [code, setCode] = useState('print("Hello World !")');

    const handleEditorChange = (value) => {
        setCode(value);
    };

    return (
        <Col xs={colSize} style={{borderLeft:"1px solid #000"}}>
            <Row style={{height:"7vh"}}>
                <Header 
                    handleOpenDarkModeSettings={handleOpenDarkModeSettings} 
                    handleOpenShareLink={handleOpenShareLink}
                />
            </Row>
            <Row style={{height:"92vh", marginTop:"1vh"}}>
                <CodeEditor language='python' value={code} onChange={handleEditorChange} />

                {/* Modals for Popups */}
                <DarkModeSettingsPopup 
                    show={darkModeSettingsPopup} 
                    handleClose={handleCloseDarkModeSettings} 
                />
                <ShareLinkPopup  
                    show={shareLinkPopup} 
                    handleClose={handleCloseShareLink} 
                />
            </Row>
        </Col>
    );
}

export default MainScreen;