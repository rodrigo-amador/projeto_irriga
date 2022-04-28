import 'dotenv/config'

// Configurações do banco de dados utilizando as variaveis do .env
export default {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  params: {
    timezone: process.env.DB_TIMEZONE,
    dialectOptions: {
      ssl: false
    },
    port: parseInt(process.env.DB_PORT),
    pool: {
      max: parseInt(process.env.DB_MAX),
      min: parseInt(process.env.DB_MIN),
      idle: parseInt(process.env.DB_IDLE)
    }
  }
}
