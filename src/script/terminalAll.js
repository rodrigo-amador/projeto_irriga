import Database from '../config/dbBoot'
import CitiesController from '../controllers/cities'
import logger from '../config/logger'

// Função responsavel por rodar o script que vai checar o clima de todas as cidades no banco 
class TerminalAllScript {
  constructor () {
    this.checkAllWeather()
  }

  async checkAllWeather () {
    try {
      await new Database().init()
      CitiesController.checkAllWeather()
    } catch (error) {
      logger.error(`[${new Date()}] [TerminalController.checkAllWeather] -> ${error.message}`)
    }
  }
}

export default new TerminalAllScript()
