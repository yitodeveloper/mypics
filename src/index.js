'use strict'

const { app, BrowserWindow } = require('electron')

app.on('before-quit', () => {
    console.log("Saliendo...")
})

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 1024,
        height: 768,
        title: 'MyPics',
        center: true,
        show: false,
    })

    // win.loadURL('https://demo.tiqt.cl') Carga una url remota
    // win.loadURL(`file://${__dirname}/`)
    win.loadFile('./renderer/index.html')
    win.on('closed', () => {
        win = null
        app.quit()
    })


    win.once('ready-to-show', () => {
        win.show()
    })

    win.on('move', () => {
        const position = win.getPosition()
        console.log(`La posicion de la ventana es ${position}`)
    })
})