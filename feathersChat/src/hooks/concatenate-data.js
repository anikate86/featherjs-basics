// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const contactsModel = require("../models/contacts.model");

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {

    const { data,method, result} = context;


    var object1 = context.result.email ;
    var object2 = context.result.phoneNo ;

    JSON.stringify( object1 )
    JSON.stringify( object2 )

    console.log(object1)


    var finalObj = object1.concat(object2);
        
    console.log(finalObj)

    const addfield = async contactsModel => {

    var object1 = context.result.email ;
    var object2 = context.result.phoneNo ;

    JSON.stringify( object1 )
    JSON.stringify( object2 )

    console.log(object1)


    var finalObj = object1.concat(object2);
        
    console.log(finalObj)
      // Get the user based on their id, pass the `params` along so
      // const newfield  = await app.service('contacts').get(contactsModel.finalObj,result);
      // that we get a safe version of the user data
      
      // Merge the message content to include the `user` object
      return {
        ...contactsModel,
        finalObj
      };
    };

    
    if (method === 'find') {
      // Map all data to include the `user` information
      context.result.data = await Promise.all(result.data.map(addfield));
    } else {
      // Otherwise just update the single result
      context.result = await addfield(result);
    }

    return context;
  };
};
