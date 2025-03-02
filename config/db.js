import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";
import { configdv } from "./config/configdb.js";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(configdv.MONGO_URI);
		console.log("MongoDB connected: " + conn.connection.host);
	} catch (error) {
		console.error("Error connecting to MONGODB: " + error.message);
		process.exit(1); // 1 means there was an error, 0 means success
	}
};
