import { join } from 'path';

export default {
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  // username: 'root',
  // password: 'root',
  database: 'restaurant',
  autoLoadEntities: true,
  synchronize: true,
  entities: [join(__dirname, '/../**/**.entity{.ts,.js}')],
  useNewUrlParser: true,
};

// export default {
//   type: 'mongodb',
//   host: process.env.TYPEORM_HOST,
//   // username: process.env.TYPEORM_USERNAME,
//   // password: process.env.TYPEORM_PASSWORD,
//   database: process.env.TYPEORM_DATABASE,
//   port: parseInt(process.env.TYPEORM_PORT, 10),
//   // logging: process.env.TYPEORM_LOGGING === 'true',
//   entity: [join(__dirname, '/../**/**.entity{.ts,.js}')],
//   useNewUrlParser: true,
//   // migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true',
//   synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
// };
