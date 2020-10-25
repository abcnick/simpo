let mainWindow

function createWindow () {

  mainWindow = new BrowserWindow({
    width: 1000, height: 800,
    webPreferences: { nodeIntegration: true }
  })

  mainWindow.loadFile('index.html')

  //mainWindow.webContents.openDevTools();

  mainWindow.webContents.on( 'crashed', () => {

    setTimeout( () => {
      mainWindow.reload()
    }, 1000)
  })

  mainWindow.on('closed',  () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})