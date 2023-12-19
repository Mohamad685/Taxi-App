const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    title: 'Admin Page',
    width: 1200,
    height: 1000,
  });

  // win.loadFile("index.html");
  win.loadURL("http://localhost:3000");
};

app.whenReady().then(() => {
  createWindow();
});
