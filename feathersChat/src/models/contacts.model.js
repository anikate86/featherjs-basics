// contacts-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'contacts';
  const mongooseClient = app.get('mongooseClient');
  const attachments = require('mongoose-attachments-aws2js');
  const uniqueValidator = require('mongoose-unique-validator')
  const bodyParser = require('body-parser')

  const multer = require('multer')
  const multipartMiddleware = multer()

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json())
  const { Schema } = mongooseClient;
  const schema = new Schema({
    // name : { type: String, required: [true,"name field can't be empty"] },
    email : {type : String,required: [true,"email field can't be empty"],unique:[true,"email is already registered"]},
  //   phoneNo : {
  //     type: Number,
  //     required: [true, "Phone no. is required"],
  //   },
  //   messages : { type: String, required: [true,"messages field can't be empty"] },
  }, {
    timestamps: true
  });

  schema.plugin(uniqueValidator);

  //   schema.plugin(attachments, {
  //   directory: 'achievements',
  //     storage: {
  //       providerName: 's3',
  //       options: {
  //       key: '<key>',
  //       secret: '<secret>',
  //       bucket: '<bucket>'
  //     }
  //   },
  //   properties: {
  //     image: {
  //       styles: {
  //         original: {
  //           // keep the original file
  //         },
  //         small: {
  //           resize: '150x150'
  //         },
  //         medium: {
  //           resize: '120x120'
  //         },
  //         medium_jpg: {
  //           '$format': 'jpg' // this one changes the format of the image to jpg
  //         }
  //       }
  //     }
  //   }
  // });
  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
