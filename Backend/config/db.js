const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL);
		console.log(
			colors.bgGreen.white`connected to DB : ${mongoose.connection.host}`
		);
	} catch (error) {
		console.log(colors.bgRed.white`error in DB : ${error}`);
	}
};
module.exports = connectDB;
