// Initializes the `files` service on path `/files`
const { Files } = require('./files.class');
const createModel = require('../../models/files.model');
const hooks = require('./files.hooks')
const createService = require('feathers-mongoose')

const multer = require('multer')
const multipartMiddleware = multer()


module.exports = function (app) {
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'files',
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/files', 

    multipartMiddleware.array('file',parseInt(1)),

    function (req, res, next) {
      req.feathers.files = req.files;
      next();
    },    
    
    createService(options)
  );

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('files')

  service.hooks(hooks)
};