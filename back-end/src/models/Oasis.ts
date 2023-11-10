// import { DataTypes } from 'sequelize';
// import { sequelize } from "../database";

// export interface CreateOasis {
//     oasisName: string;
//     water: number;
//     id: number
// };

// export const Oasis = sequelize.define('Oasis', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         allowNull: false,
//         autoIncrement: true
//     },
//     oasisName: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     water: {
//         type: DataTypes.DOUBLE,
//         allowNull: false,
//     }
// })
import { Model, DataTypes} from "sequelize";
import { sequelize } from "../database";

export class Oasis extends Model {
    declare id: number;
    declare name: string;
    declare water: number;
    declare desertId: number;
};

Oasis.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    water: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
}, {sequelize})