import { Sequelize } from 'sequelize';
import { config } from 'dotenv';
import mysql2 from 'mysql2';
config();

const mysqlPool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const sequelize = new Sequelize( process.env.DB_NAME , process.env.DB_USER = 'yu', process.env.DB_PASSWORD = '12345', {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

async function connectionTest() {
    try {
        await sequelize.authenticate();
        console.log(`Se conectó correctamente`);
    } catch (error) {
        console.log(`No está en funcionamiento: ${error}`);
    }
}

process.on('exit', () => {
    mysqlPool.end();
  });

export { connectionTest };
