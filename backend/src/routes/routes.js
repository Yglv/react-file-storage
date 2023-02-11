// eslint-disable-next-line no-undef
define(['express', '../controllers/fileController'], (express, controller) => {
  const router = express.Router()

  router.get('/', controller.getFiles)

  return router
})