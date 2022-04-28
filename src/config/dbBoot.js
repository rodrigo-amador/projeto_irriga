// import variaveis de ambiente para o BD
import DbConfig from './dbConfig'
// import de models
import Cities from '../models/cities'
import Weather from '../models/weather'
import logger from './logger'

import Sequelize from 'sequelize'

// Buffer de models
const models = [
  Cities,
  Weather
]

// Função responsavel por fazer a conexão com o BD mysql com os dados do dbConfig.js
class Database {
  async init () {
    try {
      // Inicializa conexao
      this.connection = await new Sequelize(DbConfig)
      // Percorre o array e acessa o método inicializador de cada model
      models.map((model) => {
        model.init(this.connection)
      })
    } catch (error) {
      logger.error(`[${new Date()}] [Database.init] -> Error when connecting to DB: ${error.message}`)
    }
  }
}

export default Database
