import app from "./app";
import { Server } from "http";
import dotenv from "dotenv"; // Added dotenv for managing environment variables

dotenv.config(); //Loads environment variables from .env file

const PORT: string | number = process.env.PORT || 3000; //  Used environment variable for PORT instead of hardcoded value

const server: Server = app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

export default server;