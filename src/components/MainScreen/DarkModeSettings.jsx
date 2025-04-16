import React, { useState } from "react";

function DarkModeSettings() {
	// State variables to track the selected mode for each setting
	const [websiteMode, setWebsiteMode] = useState("Dark");
	const [editorMode, setEditorMode] = useState("Dark");

	const handleSave = () => {
		// You can do something more interesting here, like:
		// - Storing preferences in localStorage
		// - Sending data to a server via an API call
		// - Triggering a global theme switch, etc.
		alert(`Saving preferences:
      Website Mode: ${websiteMode}
      Code Editor Mode: ${editorMode}`);
	};

	return (
		<div className="settings-container">
			<h1>Dark Mode Settings</h1>

			<div className="option-row">
				<label>Website</label>
				<div className="toggle-group">
					<button
						className={`toggle-button ${websiteMode === "Dark" ? "active" : ""}`}
						onClick={() => setWebsiteMode("Dark")}
					>
						Dark
					</button>
					<button
						className={`toggle-button ${websiteMode === "Light" ? "active" : ""}`}
						onClick={() => setWebsiteMode("Light")}
					>
						Light
					</button>
				</div>
			</div>

			<div className="option-row">
				<label>Code Editor</label>
				<div className="toggle-group">
					<button
						className={`toggle-button ${editorMode === "Dark" ? "active" : ""}`}
						onClick={() => setEditorMode("Dark")}
					>
						Dark
					</button>
					<button
						className={`toggle-button ${editorMode === "Light" ? "active" : ""}`}
						onClick={() => setEditorMode("Light")}
					>
						Light
					</button>
				</div>
			</div>

			<button className="save-button" onClick={handleSave}>Save</button>
		</div>
	);
}

export default DarkModeSettings;
