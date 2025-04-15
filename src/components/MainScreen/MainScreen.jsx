// src/components/MainScreen/CodeEditor.jsx

//Import the React framework
import React, { useState } from 'react';

// Importing components
import CodeEditor from './CodeEditor';
import OutputArea from './OutputArea';

import Header from './Header';

import DarkModeSettings from "./DarkModeSettings"
import LinkPopup from "./ShareLinkPopup";
import ConfirmModal from '../ConfirmBox';

import { Row, Col, Modal, Button } from 'react-bootstrap';

import './MainScreen.css';

function DarkModeSettingsPopup({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <DarkModeSettings onHide={handleClose} />
        </Modal>
    );
}

const MainScreen = ({ colSize = 10 }) => {
    // Dark Mode Settings Popup Modal Configuration
    const [darkModeSettingsPopup, setShowDarkModeSettingsPopup] = useState(false);
    const handleOpenDarkModeSettings = () => setShowDarkModeSettingsPopup(true);
    const handleCloseDarkModeSettings = () => setShowDarkModeSettingsPopup(false);

    // Share Link Popup Modal Configuration
    const [shareLink, setShareLink] = useState("http://192.168.1.10/join?id=waeiofjnsdkjbuaoadgjcvnoakkpowekj132r2kjkoj24ho2")
    const [shareLinkPopup, setShowShareLinkPopup] = useState(false);
    const handleOpenShareLink = () => setShowShareLinkPopup(true);
    const handleCloseShareLink = () => setShowShareLinkPopup(false);

    const [code, setCode] = useState('print("Hello World !")');
    const handleEditorChange = (value) => {
        setCode(value);
    };

    const [showConfirm, setShowConfirm] = useState(false);
    const handleSave = () => {
        console.log("File saved ✅");
    };

    return (
        <Col xs={colSize} style={{ borderLeft: "1px solid #000" }}>
            <Row style={{ height: "7vh" }}>
                <Header
                    handleOpenDarkModeSettings={handleOpenDarkModeSettings}
                    handleOpenShareLink={handleOpenShareLink}
                    handleFileSave={() => setShowConfirm(true)}
                />
            </Row>
            <Row style={{ height: "60vh", paddingTop: "1vh" }}>
                <CodeEditor language='python' value={code} onChange={handleEditorChange} />
            </Row>
            <Row style={{ borderTop: "1px solid black", height: "90%", maxHeight: "33vh" }}>
                <OutputArea value='coolness is within us' />
            </Row>
            {/* Modals for Popups */}
            <DarkModeSettingsPopup
                show={darkModeSettingsPopup}
                handleClose={handleCloseDarkModeSettings}
            />
            <LinkPopup
                show={shareLinkPopup}
                onHide={handleCloseShareLink}
                link={shareLink}
            />
            <ConfirmModal
                show={showConfirm}
                onClose={() => setShowConfirm(false)}
                onConfirm={handleSave}
                title="Save Changes?"
                message="This will overwrite the current file. Are you sure you want to continue?"
                confirmText="Save"
                cancelText="Cancel"
                confirmVariant="success"
            />
        </Col>
    );
}

export default MainScreen;