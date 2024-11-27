const { contextBridge, ipcRenderer } = require('electron');
const { rename } = require('original-fs');

contextBridge.exposeInMainWorld('electronAPI', {
	example: (arg) => ipcRenderer.invoke('example', arg),
});