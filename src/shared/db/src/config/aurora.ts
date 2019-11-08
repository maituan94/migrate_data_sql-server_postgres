import { Supplier,Producer,ContactPerson,BaseRMSP } from "../entities";

interface AuroraConfig {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  synchronize?: boolean;
  migrationsRun?: boolean;
  logging?: boolean;
  entities: any[];
}

export const AuroraConfig: any = {
  type: "postgres",
  host: process.env.DB_AURORA_HOST,
  port: parseInt(process.env.DB_AURORA_PORT),
  username: process.env.DB_AURORA_USER,
  password: process.env.DB_AURORA_PASSWORD,
  database: process.env.DB_AURORA_DATABASE,
  synchronize: true,
  migrationsRun: true,
  logging: false,
  entities: [BaseRMSP,Supplier,Producer,ContactPerson]
};
