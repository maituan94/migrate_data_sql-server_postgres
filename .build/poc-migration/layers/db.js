"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { ConnectionPool } = require("mssql");
const config = {
    user: process.env.DB_SQLSERVER_USER,
    password: process.env.DB_SQLSERVER_PASSWORD,
    server: process.env.DB_SQLSERVER_HOST,
    database: process.env.DB_SQLSERVER_DATABASE
};
// const db = new sql.ConnectionPool(config).connect();
class SQLDBContext {
    constructor() {
        this.db = new ConnectionPool(config);
    }
    async getAll() {
        await this.db.connect();
        const request = await this.db.request();
        return request.query(`SELECT TOP (50) *
        FROM [AdventureWorks2016].[Person].[Person]`);
    }
}
exports.default = SQLDBContext;
//# sourceMappingURL=db.js.map