// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginBox from './LoginBox';
import RegisterBox from './RegisterBox';
import MainIDE from './MainIDE';

import { loadSavedGlobalTheme, saveGlobalTheme, loadSavedEditorTheme, saveEditorTheme } from "./utils"

function App() {
	// Dark Mode Settings
	const [globalThemeDark, setGlobalThemeDark] = useState(loadSavedGlobalTheme());
	const [editorThemeDark, setEditorThemeDark] = useState(loadSavedEditorTheme());

	const [fileName, setFileName] = useState("somethingcool.js");
	const [editorContent, setEditorContent] = useState("console.log('Something Cool')");
	const [outputContent, setOutputContent] = useState("Something Cool");

	// Save to localStorage whenever it changes
	useEffect(() => saveGlobalTheme(globalThemeDark), [globalThemeDark]);
	useEffect(() => saveEditorTheme(editorThemeDark), [editorThemeDark]);

	return (
		<Router>
			<Routes>
				{/* Redirect root "/" to "/login" */}
				<Route
					path="/"
					element={
						<MainIDE
							DarkTheme={{
								global:{
									get:()=>globalThemeDark, 
									set:setGlobalThemeDark
								},
								editor:{
									get:()=>editorThemeDark, 
									set:setEditorThemeDark
								}
							}}

							IDEVars={{
								fileName:{
									get:()=>fileName,
									set:setFileName
								},
								editorContent:{
									get:()=>editorContent,
									set:setEditorContent
								},
								outputContent:{
									get:()=>outputContent,
									set:setOutputContent
								},
							}}
						/>
					}
				/>

				{/* Login page */}
				<Route
					path="/login"
					element={
						<LoginBox />
					}
				/>

				{/* Register page */}
				<Route
					path="/register"
					element={
						<RegisterBox />
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
