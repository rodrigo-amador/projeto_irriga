import cron from 'node-cron'
import CitiesController from '../controllers/cities'
import logger from '../config/logger'

class OpenWeatherJob {
  async init () {
    try {
      // inicia o job para rodar toda xx:30
      cron.schedule('00 30 * * * *', async () => {
        await this.run()
      })

      // Roda a primeira vez quando inicia o projeto
      await this.run()
    } catch (error) {
      logger.error(`[${new Date()}] [OpenWeatherJob.init] -> ${error.message}`)
    }
  }

  async run () {
    try {
      // Faz a chamada do controller que inicia o get de cidades para pesquisa
      await CitiesController.checkAllWeather()
    } catch (error) {
      throw new Error(`[${new Date()}] [OpenWeatherJob.run] -> ${error.message}`)
    }
  }
}

export default OpenWeatherJob
