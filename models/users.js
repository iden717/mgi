const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  nama: {
    type: String,
    require: true,
  },
  hobi: {
    type: String,
    require: true,
  },
  alamat: {
    type: String,
    require: true,
  },
  nomor_telp: {
    type: Number,
    require: true,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
