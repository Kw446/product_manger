const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/productdb", {
  useNewUrlParser: true,
});
mongoose.connection.on("error", (err) => {
  console.log("databses  is connected succefully");
});
mongoose.connection.on("connected", (req, res) => {
  console.log("databses  is connected succefully");
});
