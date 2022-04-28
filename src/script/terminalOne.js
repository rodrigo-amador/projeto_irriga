import Database from '../config/dbBoot'
import CitiesController from '../controllers/cities'
import logger from '../config/logger'

// Função responsavel por rodar o script que vai checar o clima de uma cidade especifica, especificada pelo id fornecido ao rodar o script 
class TerminalOneController {
  constructor () {
    this.checkOneWeather()
  }

  async checkOneWeather () {
    try {
      if (process.argv.length === 3) {
        await new Database().init()
        CitiesController.checkOneWeather(parseInt(process.argv[2]))
      } else {
        throw new Error('ID not send')
      }
    } catch (error) {
      logger.error(`[${new Date()}] [TerminalController.checkOneWeather] -> ${error.message}`)
    }
  }
}

export default new TerminalOneController()
