// // Use this hook to manipulate incoming or outgoing data.
// // For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// // eslint-disable-next-line no-unused-vars
// const storage = require('@google-cloud/storage')
// // const { randonHexString } = require('@utils')
// const { BadRequest } = require('@feathersjs/errors')

// const gcs = storage({
//   projectId: process.env.GCP_PROJECT_ID || undefined,
//   keyFilename: process.env.GCP_KEYFILE_PATH || undefined
// })

// const bucket = gcs.bucket(process.env.GCS_BUCKET)

// module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
//   return async context => {

//     const files = context.params.files

//     if (!files || files.length === 0) {
//       throw new BadRequest("No files found to upload")
//     }

//     let promises = []

//     files.forEach(file => {
//       let promise = new Promise((resolve, reject) => {

//         const fileName = randonHexString(32) + '_' + file.originalname
//         const gcsFile = bucket.file(fileName)
//         const mimeType = file.mimetype

//         let resultFile = {
//           bucket: bucket.name,
//           provider: "google",
//           name: fileName,
//           contentType: mimeType,
//           originalName: file.originalname
//         }

//         const stream = gcsFile.createWriteStream({
//           public: true,
//           metadata: {
//             contentType: mimeType
//           }
//         });

//         stream.on('error', (err) => {
//           return reject(err)
//         });

//         stream.on('finish', () => {
//           resolve(resultFile)
//         });

//         stream.end(file.buffer);
//       })

//       promises.push(promise)
//     });

//     const result =  await Promise.all(promises)

//     context.data = result

//     return context

//   };
// };