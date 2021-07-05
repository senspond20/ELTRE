if (process.env.mode === 'dev') {
    win.loadURL('http://localhost:3000')
  } else {
    win.loadURL(
      `file://${path.join(__dirname, '../build/index.html')}`
    )
    win.loadFile(
      `${path.join(__dirname, '../build/index.html')}`
    )
  }