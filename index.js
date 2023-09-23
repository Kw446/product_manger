const Express =require("express");
const { router } = require("./routes/productRouter");
const app =Express();
require("./config/moddelConfig");


app.use(Express.json());
app.use("/",router);
app.listen(9000,()=>{
    console.log("port is connected to 9000 port successfully");
});