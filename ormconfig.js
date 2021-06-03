console.log("process.env.DATABASE_URL:>>", process.env.DATABASE_URL)
module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "synchronize": false,
  "ssl": {
    "rejectUnauthorized": false
  },
  "entities": [
    "dist/src/app/models/**.js"
  ],
  "migrations": [
    "dist/src/database/migrations/**.js"
  ],
  "cli": {
    "migrationsDir": ["src/database/migrations"],
    "entitiesDir":"src/app/models"
  }
}