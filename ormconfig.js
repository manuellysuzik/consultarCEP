
module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "synchronize": false,
  "ssl": {
    "rejectUnauthorized": false
  },
  "entities": [
    "./src/app/models/*.js"
  ],
  "migrations": [
    "./src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}