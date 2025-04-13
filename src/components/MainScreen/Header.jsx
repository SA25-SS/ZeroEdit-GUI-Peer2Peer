// src/components/MainScreen/Header.jsx

import React, { useState, Modal } from 'react';

const Header = ({handleOpenDarkModeSettings, handleOpenShareLink = (() => console.log("Open popup of Share link"))}) => {
    const [fileName, setFileName] = useState('untitled.txt');
    
    return (
        <div id="Main-Screen-Header" style={{ display: 'flex', alignItems: 'center', width: "100%", borderBottom: '0.1px solid #000' }}>
            <h2 className='text-start' style={{ paddingRight: '25px' }}>
                Zero Edit
            </h2>

            <div style={{ alignItems: 'left', gap: '10px' }}>
                <b style={{ alignSelf: 'center' }}>File :</b> &nbsp;
                <input
                    type="text"
                    placeholder="Enter file name"
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                    style={{ padding: '5px', fontSize: '14px' }}
                />
                <button name="saveFile" id="saveFile">
                    &nbsp;
                    <i className='bi bi-floppy fs-5'></i>
                </button>
            </div>

            <div style={{ marginLeft: 'auto', alignSelf: 'right' }}>
                <button name="shareLink" id="shareLink" onClick={handleOpenShareLink}>
                    <i className='bi bi-link fs-3'></i>
                </button>
                <button name="threeDots" id="threeDots" onClick={handleOpenDarkModeSettings}>
                    <i className='bi bi-three-dots fs-3'></i>
                </button>
            </div>

        </div>
    );
}

export default Header;