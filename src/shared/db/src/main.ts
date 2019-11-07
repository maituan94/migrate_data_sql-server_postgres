import { sendMessage } from "./helpers/utils";
import { MSSQLContext } from "./core/MSSQLContext";
import { AuroraContext } from "./core/AuroraContext";

async function testMSSQLConnection() {
  try {
    const MSSQLDB:any = MSSQLContext.getInstance();
    const request:any = await MSSQLDB.getRequest();
    const result:any = await request.query(
      `SELECT TOP (10) * FROM [AdventureWorks2016].[Person].[Person]`
    );

    return sendMessage(200, result);
  } catch (err) {
    return sendMessage(502, err);
  }
}

async function testAuroraConnection() {
  try {
    const AuroraDB:any = AuroraContext.getInstance();
    const request:any = await AuroraDB.getRequest();
    const result:any = await request.query(`SELECT * FROM person`);

    return sendMessage(200, result);
  } catch (err) {
    return sendMessage(502, err);
  }
}

module.exports = {
  testMSSQLConnection,
  testAuroraConnection
};
