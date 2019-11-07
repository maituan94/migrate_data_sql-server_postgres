import { ConnectionPool, Request } from "mssql";
import { MSSQLConfig } from "../config/mssql";

export class MSSQLContext {
  private static instance: MSSQLContext;
  private static pool: ConnectionPool;
  private static poolConnect: Promise<ConnectionPool>;

  private constructor() {
    MSSQLContext.pool = new ConnectionPool(MSSQLConfig);
    MSSQLContext.poolConnect = MSSQLContext.pool.connect();
    MSSQLContext.pool.on("error", this.showError);
  }

  static getInstance(): MSSQLContext {
    if (!MSSQLContext.instance) {
      MSSQLContext.instance = new MSSQLContext();
    }

    return MSSQLContext.instance;
  }

  private showError(err: any) {
    console.log("--------------- ERROR: MSSQLContext ------------------");
    console.log(err);
    console.log("---------------------------------");
  }

  /**
   * getRequest()
   * You can call some functions from Request instance
   * (await getRequest()).query('SELECT * FROM ...')
   * @returns Promise<Request>
   */
  async getRequest(): Promise<Request> {
    // Ensures that the pool has been created
    await MSSQLContext.poolConnect;

    // Return the request instance
    return await MSSQLContext.pool.request();
  }
}
