// src/components/MainScreen/Header.jsx

import React, { useState } from 'react';

const Header = () => {
    const [fileName, setFileName] = useState('untitled.txt');

    return (
        <div style={{ display: 'flex', alignItems: 'center', width: "100%", borderBottom:'0.1px solid #000'}}>
            <h2 className='text-start' style={{ paddingRight: '25px' }}>
                Zero Edit
            </h2>

            <div style={{ alignItems: 'left', gap: '10px' }}>
                <b style={{alignSelf: 'center'}}>File :</b> &nbsp;
                <input
                    type="text"
                    placeholder="Enter file name"
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                    style={{ padding: '5px', fontSize: '14px' }}
                />
                <a name="saveFile" id="saveFile" role="button">
                    💾
                </a>
            </div>

            <div style={{marginLeft:'auto', alignSelf: 'right'}}>
            🔗 &nbsp; <b>. . .</b>
            </div>
        </div>
    );
}

export default Header;