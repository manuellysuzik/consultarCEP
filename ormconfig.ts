
module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "synchronize": false,
  "ssl": {
    "rejectUnauthorized": false
  },
  "entities": [
    "./src/app/models/**.ts"
  ],
  "migrations": [
    "./src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}