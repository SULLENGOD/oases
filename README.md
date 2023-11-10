
# Oases App
Luis Martinez.

This repository contains the code for the Oases App, an application created to find oases in certain deserts.

## Cloning the Repository

To clone this repository, use the following command in your terminal:

bashCopy code

`git clone https://github.com/SULLENGOD/oases.git` 

## Database Connection

The database connection is configured in the `database.ts` file. Make sure to provide the necessary credentials in this file before running the application. Here is an example of the database connection configuration:

javascriptCopy code

`// database.ts

import { Sequelize } from "sequelize";

type DBConfig = {
  name: string;
  user: string;
  password: string;
  host: string;
};

const db: DBConfig = {
  name: process.env.DB_NAME || "",
  user: process.env.DB_USER || "",
  password: process.env.DB_PASS || "",
  host: process.env.DB_HOST || "",
};

export const sequelize = new Sequelize(db.name, db.user, db.password, {
  host: db.host,
  dialect: 'postgres'
});` 

Ensure that you have a PostgreSQL database set up, and the necessary environment variables (DB_NAME, DB_USER, DB_PASS, DB_HOST) are configured.

## Frontend Configuration

1.  Create a `.env` file in the root of the `front-end` directory.
    
2.  Add the following content to the `.env` file:
    
    envCopy code
    
    `PORT=3001` 
    
    Adjust the port number as needed.
    
3.  Save the file.
    

## Running the Frontend

To start the frontend, use the following command:

`cd front-end`
`yarn dev` 

This will run the frontend in development mode, and you can access it by navigating to [http://localhost:5173](http://localhost:5173/) in your browser.