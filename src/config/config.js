module.exports ={
  "development": {
    "database": process.env.DB_NAME || "database_development",
    "dialect": "sqlite",
    "storage": `./src/database/ejemplo.sqlite`
  },
  "test": {
    "database": process.env.DB_NAME || "database_test",
    "dialect": "sqlite",
    "storage": `./src/database/ejemplo.sqlite`
  },
  "production": {
    "database": process.env.DB_NAME || "database_production",
    "dialect": "sqlite",
    "storage": `./src/database/ejemplo.sqlite`
  }

}
