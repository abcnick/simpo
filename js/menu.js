let mainWindow1

const { on } = require("process")

const menup = document.querySelector('.menup')
const menu = document.querySelector('.menu-navegacion')


menup.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
    createWindow1();

})

menup.addEventListener('click', ()=>{
    createWindow1();

})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != menup){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})

function createWindow1 () {

   
    mainWindow1 = new BrowserWindow({
      width: 1000, height: 800,
      webPreferences: { nodeIntegration: true }
    })
  
    mainWindow1.loadFile('estudiantes.html')
  
    //mainWindow.webContents.openDevTools();
  
    mainWindow1.webContents.on( 'crashed', () => {
  
      setTimeout( () => {
        mainWindow1.reload()
      }, 1000)
    })
  
    mainWindow1.on('closed',  () => {
      mainWindow1 = null
    })

  }
  