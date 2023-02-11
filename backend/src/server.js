/* eslint-disable no-undef */

const define = require('requirejs')

define(['express', './routes/routes', 'cors'], (express, router, cors) => {
  const app = express()
  const port = process.env.PORT || 5000
  app.use(express.static('public'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cors({
    origin: 'http://localhost:3000'
  }))
  app.use('/', router)
  
  app.listen(port, err => {
    err ? console.log(`${err}`) : console.log(`work on ${port}`)
  })
})
