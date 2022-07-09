module.exports = {
  development: {
    username: "root",
    password: "Rizalmohamad123",
    database: "ektsp",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false
  },
  "test": {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  "production": {
    use_env_variable: "DATABASE_URL",
    dialect: "postgress",
    protocol: "postgress",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    }
  }
}
