// Read from localStorage
export const loadSaved = (key) => localStorage.getItem(key);
export const save = (key, value) => localStorage.setItem(key, value);


// Read/Write Theme from localStorage
export const loadSavedGlobalTheme = () => loadSaved('GlobalThemeDark') === 'true';
export const loadSavedEditorTheme = () => loadSaved('EditorThemeDark') === 'true';
//
export const saveGlobalTheme = (globalThemeDark) => save('GlobalThemeDark', globalThemeDark === true);
export const saveEditorTheme = (editorThemeDark) => save('EditorThemeDark', editorThemeDark === true);

// Read/Write settings from localStorage
export const loadSavedSettings = () => JSON.parse(loadSaved("settings"));;
export const saveSettings = (settings) => save("settings", JSON.stringify(settings));


// File Download
export const downloadFile = ({ fileName, fileContent }) => {
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const element = document.createElement('a');
    element.href = url;
    element.download = fileName;
    document.body.appendChild(element);
    element.click();

    document.body.removeChild(element);
    URL.revokeObjectURL(url); // Clean up the blob URL
};

//File Upload
export const triggerFileUpload = ({ onFileRead, onFileName }) => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            onFileName?.(file.name);
            const reader = new FileReader();
            reader.onload = (event) => {
                onFileRead?.(event.target.result);
            };
            reader.readAsText(file);
        }
    });

    document.body.appendChild(fileInput);
    fileInput.click();
    document.body.removeChild(fileInput);
};