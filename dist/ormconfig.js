module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "synchronize": false,
    "ssl": {
        "rejectUnauthorized": false
    },
    "entities": [
        "./dist/app/models/*.js"
    ],
    "migrations": [
        "./dist/database/migrations/*.js"
    ],
    "cli": {
        "migrationsDir": "./dist/database/migrations"
    }
};
