

const uploadFilesToGcs = require('../../hooks/upload-files-to-gcs');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    // create: [uploadFilesToGcs()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
