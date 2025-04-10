// src/components/MainScreen/CodeEditor.jsx

//Import the React framework
import React, { useState } from 'react';

// Importing components
import CodeEditor from './CodeEditor';
import Header from './Header';

import { Row, Col } from 'react-bootstrap';

const MainScreen = ({ colSize = 10}) => {
    const [code, setCode] = useState('print("Hello World !")');

    const handleEditorChange = (value) => {
        setCode(value);
    };

    return (
        <Col xs={colSize} style={{borderLeft:"1px solid #000"}}>
            <Row style={{height:"7vh"}}>
                <Header />
            </Row>
            <Row style={{height:"92vh", marginTop:"1vh"}}>
                <CodeEditor language='python' value={code} onChange={handleEditorChange} />
            </Row>
        </Col>
    );
}

export default MainScreen;