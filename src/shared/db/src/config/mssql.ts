import { config } from "mssql";

export const MSSQLConfig: config = {
  user: process.env.SQLSERVER_USER,
  password: process.env.SQLSERVER_PASSWORD,
  server: process.env.SQLSERVER_HOST,
  database: process.env.SQLSERVER_DATABASE
};
