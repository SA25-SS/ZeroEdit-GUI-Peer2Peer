// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginBox from './LoginBox';
import RegisterBox from './RegisterBox';
import MainEditor from './MainEditor';

import { loadSavedGlobalTheme, loadSavedEditorTheme } from "./utils"

function App() {
	const [globalThemeDark, setGlobalThemeDark] = useState(loadSavedGlobalTheme);
	const [editorThemeDark, setEditorThemeDark] = useState(loadSavedEditorTheme);

	// Save to localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem('GlobalThemeDark', globalThemeDark);
	}, [globalThemeDark]);

	useEffect(() => {
		localStorage.setItem('EditorThemeDark', editorThemeDark);
	}, [editorThemeDark]);

	return (
		<Router>
			<Routes>
				{/* Redirect root "/" to "/login" */}
				<Route path="/" element={<MainEditor globalTheme={globalThemeDark} editorTheme={editorThemeDark} setTheme={setGlobalThemeDark} setEditorTheme={setEditorThemeDark} />} />

				{/* Login page */}
				<Route path="/login" element={<LoginBox />} />

				{/* Register page */}
				<Route path="/register" element={<RegisterBox />} />
			</Routes>
		</Router>
	);
}

export default App;
