// contacts-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'contacts';
  const mongooseClient = app.get('mongooseClient');
  const attachments = app.get('mongoose-attachments');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    name : { type: String, required: [true,"name field can't be empty"] },
    email : {type : String,required: [true,"email field can't be empty"]},
    phoneNo : {
      type: Number,
      required: [true, "Phone no. is required"],
    },
    messages : { type: String, required: [true,"messages field can't be empty"] },
    attachment : { type: String, required: [true,"attachment  field can't be empty"] }

  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
