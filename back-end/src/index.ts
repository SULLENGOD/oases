import dotenv from 'dotenv';
dotenv.config();
import { sequelize } from "./database";
import app from "./app";
import './models/Desert'
import './models/Oasis'


async function main() {
  try {
    await sequelize.sync({force: false});
    app.listen(app.get("port"));
    console.log("server on port: ", app.get("port"));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
