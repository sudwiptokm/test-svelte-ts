const { app, BrowserWindow, ipcMain } = require("electron");
const { join } = require("path");

const isDev = true; //!app.isPackaged;
app.whenReady().then(main);

function main() {
  const window = new BrowserWindow({
    width: 1440,
    height: 875,
    show: false,
    webPreferences: {
      preload: join(__dirname, "./preload.js"),
    },
  });

  window.loadFile(join(__dirname, "../public/index.html"));
  window.on("ready-to-show", window.show);

  // if (isDev) {
  //   window.webContents.openDevTools();
  // }
}

ipcMain.handleOnce("get/version", () => app.getVersion());
