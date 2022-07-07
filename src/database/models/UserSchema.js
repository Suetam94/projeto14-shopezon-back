const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "User name is required"],
    },
    email: {
      type: String,
      require: [true, "User email is required"],
    },
    password: {
      type: String,
      require: [true, "User password is required"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", UserSchema);
