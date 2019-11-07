import { ConnectionManager, Connection } from "typeorm";
import { AuroraConfig } from "../config/aurora";

export class AuroraContext {
  private static instance: AuroraContext;
  private static connectionManager: ConnectionManager;
  private static connection: Connection;
  private static request: Connection;

  private constructor() {
    AuroraContext.connectionManager = new ConnectionManager();
    AuroraContext.connection = AuroraContext.connectionManager.create(
      AuroraConfig
    );
  }

  static getInstance(): AuroraContext {
    if (!AuroraContext.instance) {
      AuroraContext.instance = new AuroraContext();
    }

    return AuroraContext.instance;
  }

  /**
   * getRequest()
   * You can call some functions from Request instance
   * (await getRequest()).query('SELECT * FROM ...')
   * @returns Promise<Request>
   */
  async getRequest(): Promise<Connection> {
    if (!AuroraContext.request) {
      AuroraContext.request = await AuroraContext.connection.connect();
    }

    return AuroraContext.request;
  }

  getRepository() {}
}
