export default {
  type: "sqlite",
  database: './src/database/cepDB.sqlite',
  entities: [
    "./src/app/models/**.ts"
  ],
  migrations: [
    "./src/database/migrations/*.ts"
  ],
  cli: {
    migrationsDir: "./src/database/migrations"
  }
}