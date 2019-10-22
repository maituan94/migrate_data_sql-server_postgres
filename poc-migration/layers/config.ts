// Config that is common to more than one part of the app.

import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import { Person } from '../entity/postgresModels/Person';

const typeOrmConfig: PostgresConnectionOptions = {
    type: "postgres",
    host: "54.204.176.34",
    port: 9999,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [
        Person,
    ]
};

export { typeOrmConfig };