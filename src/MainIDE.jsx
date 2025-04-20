//Import the Logo
// import logo from './logo.svg';

// Importing CSS and Bootstrap
import './MainIDE.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Container, Row } from 'react-bootstrap';

//Import the React framework
import React, { useEffect, useState } from 'react';

// Importing components
import MainScreen from './components/MainScreen/MainScreen';
import SideBar from './components/SideBar/SideBar';
import LoadingScreen from './LoadingScreen'

// import { Text } from 'automerge'
import { useDocument } from '@automerge/automerge-repo-react-hooks';
// import { updateText } from '@automerge/automerge/next';

import { loadSavedAuthToken } from './utils/storage'; 
import { verifyToken } from './utils/auth'; 
import { Navigate } from 'react-router-dom';

function MainIDE({ DarkTheme, docUrl }) {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // Track authentication status
    
    // const [fileName, _setFileName] = useState("somethingcool.js");
    // const [editorContent, _setEditorContent] = useState("console.log('Something Cool')");
    const [outputContent, setOutputContent] = useState("Something Cool");
    
    // Automerge Doc
    const [doc, changeDoc] = useDocument(docUrl);
    
    const authToken = loadSavedAuthToken();
    
    useEffect(() => {
        const checkAuthToken = async () => {
            if (authToken) {
                try {
                    const response = await verifyToken(authToken);
                    if (response.ok) {
                        setIsAuthenticated(true); // Token is valid
                    } else {
                        setIsAuthenticated(false); // Token is invalid
                    }
                } catch (error) {
                    console.error('Error verifying token:', error);
                    setIsAuthenticated(false); // Handle errors gracefully
                }
            } else {
                setIsAuthenticated(false); // No token found
            }
        };

        checkAuthToken();
    }, [authToken]);

    const setFileName = (value) => {
        changeDoc((d) => { d.fileName = value; });
        // _setFileName(value);
    };

    const setEditorContent = (value) => {
        changeDoc((d) => { d.fileContent = value; });
        // _setEditorContent(value);
    };

    const IDEVars = {
        fileName: {
            // value: doc?.fileName ?? fileName,
            value: doc?.fileName ?? "somethingcool.js",
            set: setFileName
        },
        editorContent: {
            // value: doc?.fileContent ?? editorContent,
            value: doc?.fileContent ?? "console.log('Something Cool')",
            set: setEditorContent
        },
    }

    if (isAuthenticated === false) {
        return <Navigate to="/login" />; // Redirect to login if not authenticated
    }

    if (isAuthenticated === null) {
        return <LoadingScreen DarkTheme={DarkTheme}/>; // Show a loading state while verifying the token
    }

    return (
        <Container className={`App px-0 ${(DarkTheme.global.value && "bg-dark text-light") || "bg-light text-dark"}`} fluid>
            <Row className='mx-0'>
                <SideBar colSize={2} DarkTheme={DarkTheme} IDEVars={IDEVars} docUrl={docUrl} />
                <MainScreen colSize={10} DarkTheme={DarkTheme} IDEVars={IDEVars} docUrl={docUrl} />
            </Row>
        </Container>
    );
}

export default MainIDE;
