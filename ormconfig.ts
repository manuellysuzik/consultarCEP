export default {
  type: "sqlite",
  database: './src/database/teste.sqlite',
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