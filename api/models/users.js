let mongoose = require("mongoose");
let Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Users",
  new Schema({
    name: {
      type: String,
      required: "Nom obligatoire"
    },
    firstname: String,
    mail: {
      type: String,
      required: "Mail obligatoire"
    },
    password: {
      type: String,
      required: "Mot de passe obligatoire"
    },
    admin: {
      type: Boolean,
      default: false
    },
    createAt: {
      type: Date,
      default: Date.now()
    }
  })
);