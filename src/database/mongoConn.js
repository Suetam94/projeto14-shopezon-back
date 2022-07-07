const { connect } = require("mongoose");

const mongoConn = async () => {
  await connect(process.env.MONGO_URI);

  console.log("MongoDB is connected");
};

module.exports = mongoConn;
