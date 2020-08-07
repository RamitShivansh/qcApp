const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow } = electron;

let mainWindow;

function createWindow() {

    // create a new window
    mainWindow = new BrowserWindow({});

    // Load HTML into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
}

app.on('ready', createWindow);