define(['fs'], fs => {
  const controllerMethods = {}

  controllerMethods.getFiles = (req, res) => {
    const basePath = '../files/'
    let path = ''

    if ('path' in req.query) {
      path = req.query.path
    }
    
    if (fs.lstatSync(basePath + path).isDirectory() && fs.existsSync(basePath + path)) { 
      let files = fs.readdirSync(basePath + path).map(item => {
        const isDir = fs.lstatSync(basePath + path + '/' + item).isDirectory()
        let size = 0
        if (!isDir){
          size = fs.statSync(basePath + path + '/' + item)
          console.log(size.size)
        }

        return {
          name: item,
          dir: isDir,
          size: size.size ?? 0
        }
      })
      res.json({
        path,
        result: true,
        files
      })
    }
  }

  return controllerMethods
})