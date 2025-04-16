// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginBox from './LoginBox';
import RegisterBox from './RegisterBox';
import MainIDE from './MainIDE';

import { loadSavedGlobalTheme, saveGlobalTheme, loadSavedEditorTheme, saveEditorTheme } from "./utils"

function App() {
	// const default_dark_theme = true;

	const [globalThemeDark, setGlobalThemeDark] = useState(loadSavedGlobalTheme());
	const [editorThemeDark, setEditorThemeDark] = useState(loadSavedEditorTheme());

	// Save to localStorage whenever it changes
	useEffect(() => saveGlobalTheme(globalThemeDark), [globalThemeDark]);
	useEffect(() => saveEditorTheme(editorThemeDark), [editorThemeDark]);
	
	// // Testing  Toggle between dark and light modes
	// useEffect(() => {
	// 	setGlobalThemeDark(default_dark_theme);
	// 	setEditorThemeDark(default_dark_theme);
	// }, [default_dark_theme]);

	return (
		<Router>
			<Routes>
				{/* Redirect root "/" to "/login" */}
				<Route
					path="/"
					element={
						<MainIDE
							globalThemeDark={globalThemeDark}
							editorThemeDark={editorThemeDark}
							setGlobalTheme={setGlobalThemeDark}
							setEditorTheme={setEditorThemeDark}
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
