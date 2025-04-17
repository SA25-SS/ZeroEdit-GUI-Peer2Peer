// Read from localStorage
export const loadSavedGlobalTheme = () => localStorage.getItem('GlobalThemeDark') === 'true';
export const loadSavedEditorTheme = () => localStorage.getItem('EditorThemeDark') === 'true';

// Write to localStorage
export const saveGlobalTheme = (globalThemeDark) => localStorage.setItem('GlobalThemeDark', globalThemeDark === true);
export const saveEditorTheme = (editorThemeDark) => localStorage.setItem('EditorThemeDark', editorThemeDark === true);

// File Download
export const downloadFile = ({fileName, fileContent}) => {
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