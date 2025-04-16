// Read
export const loadSavedGlobalTheme = () => localStorage.getItem('GlobalThemeDark') === 'true';
export const loadSavedEditorTheme = () => localStorage.getItem('EditorThemeDark') === 'true';

// Write
export const saveGlobalTheme = (globalThemeDark) => localStorage.setItem('GlobalThemeDark', globalThemeDark === true);
export const saveEditorTheme = (editorThemeDark) => localStorage.setItem('EditorThemeDark', editorThemeDark === true);