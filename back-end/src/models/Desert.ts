// import { DataTypes } from "sequelize";
// import { sequelize } from "../database";
// import { Oasis } from "./Oasis";

// export const Desert = sequelize.define('Desert', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         allowNull: false,
//         autoIncrement: true
//     },
//     desertName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     }
// })

// Desert.hasMany(Oasis, {
//     foreignKey: 'desertId',
//     sourceKey: 'id'
// });

// Oasis.belongsTo(Desert, {
//     foreignKey: 'desertId',
//     targetKey: 'id'
// })

import { Model, DataTypes, CreationOptional } from "sequelize";
import { Oasis } from "./Oasis";
import { sequelize } from "../database";

export class Desert extends Model {
    declare id: CreationOptional<number>;
    declare name: string;
};

Desert.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {sequelize})

// Define la relación hasMany
Desert.hasMany(Oasis, {
    foreignKey: 'desertId',
    sourceKey: 'id'
});

// Define la relación belongsTo
Oasis.belongsTo(Desert, { 
    foreignKey: 'desertId', 
    targetKey: 'id' 
});
