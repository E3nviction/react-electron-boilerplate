const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		title: 'React Electron Boilerplate',
		autoHideMenuBar: true,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
			nodeIntegration: true,
			contextIsolation: true,
			enableRemoteModule: true,
		}
	});

	mainWindow.loadURL('http://localhost:3000');
}

// handlers
ipcMain.handle('example', async (arg) => {
	console.log(arg);
});

// create window
app.whenReady().then(() => {
	createWindow();

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});
