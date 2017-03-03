const mongoose = require('mongoose');

// set up custom options for the schema here
const schemaOptions = {};

// set the schema to autocreate createdAt and updatedAt timestamps
// http://mongoosejs.com/docs/guide.html#timestamps
schemaOptions.timestamps = true;

const schema = new mongoose.Schema({
    emails: [{
        verified: Boolean,
        address: String,
    }],
    services: {
        password: {
            bcrypt: String,
        },
    },
    profile: {
      name: {
        firstName: String,
        lastName: String,
      },
      image: String
    }
}, schemaOptions);

module.exports = schema;