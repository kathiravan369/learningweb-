
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
const dataRoutes = require("./routes/dataRoutes");


require("dotenv").config();
const app = express();

const PORT = 8000;
const MONGODB_URI =
  "mongodb://127.0.0.1:27017/loginDemo?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.3";

app.use(cors());
app.use(express.json());

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongooDB connect "))
  .catch((err) => console.log(err));



app.use("/api/data", dataRoutes);

app.listen(PORT, () => console.log(`server is working on ${PORT}`));
