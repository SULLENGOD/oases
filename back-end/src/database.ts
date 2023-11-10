import { Sequelize } from "sequelize";

type DBConfig = {
    name: string;
    user: string;
    password: string;
    host: string;
};

const db: DBConfig = {
    name: process.env.DB_NAME || '',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASS || '',
    host: process.env.DB_HOST || ''
};

export const sequelize = new Sequelize(db.name, db.user, db.password, {
    host: db.host,
    dialect: 'postgres'
});