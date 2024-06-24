const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

//ROUTES
// app.get("", (req, res) => {
// 	res.status(200).json({
// 		sucess: true,
// 		message: "Welcome to our GET API",
// 	});
// });

//routes
app.use("/", require("./routes/taskRoute"));

//PORT
const PORT = process.env.PORT;

// listen to the server
app.listen(PORT, (req, res) => {
	console.log(colors.bgGreen.white`Server is running on port ${PORT}`);
});
