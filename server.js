const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// import routes
const insertion = require("./routes/insertion");
const bubble = require("./routes/bubble");
const merge = require("./routes/merge");
const quick = require("./routes/quick");
const radix = require("./routes/radix");
const selection = require("./routes/selection");

// use dotenv to load environment variables from .env file
dotenv.config();

// import dependencies
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("");
});

////// time is in ms?
// routes
app.use("/insertion", insertion);
app.use("/bubble", bubble);
app.use("/merge", merge);
app.use("/quick", quick);
app.use("/radix", radix);
app.use("/selection", selection);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port: ${process.env.PORT || 3000}`);
});
