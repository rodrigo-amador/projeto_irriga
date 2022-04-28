import Cities from '../models/cities'
import WeatherController from './weather'
import logger from '../config/logger'

class CitiesController {
  // Função responsavel por fazer o get de todas as cidades e chamar o WeatherController
  async checkAllWeather () {
    try {
      const cities = await Cities.findAll()
      cities.map(async (citie) => {
        // Valida se o registro possui latitude/longitude, obrigatorio para a chamada da API
        if (!citie.latitude || !citie.longitude) {
          // Não faz o throw para não parar o JOB, mas salva o Log para que alguma ação possa ser feita
          return logger.error(`[${new Date()}] [CitiesController.checkAllWeather] -> Model Cities - Register id '${citie.id}' incomplete, please update with Latitude/Longitude`)
        }

        return WeatherController.getWeather(citie)
      })
    } catch (error) {
      logger.error(`[${new Date()}] [CitiesController.checkAllWeather] -> ${error.message}`)
    }
  }

  // Função responsavel por fazer o get de uma cidade especificada pelo ID informado e chamar o WeatherController
  async checkOneWeather (id) {
    try {
      const citie = await Cities.findOne({ where: { id } })
      if (!citie) {
        throw new Error(`Model Cities - Register id '${citie.id}' not found`)
      }

      // Valida se o registro possui latitude/longitude, obrigatorio para a chamada da API
      if (!citie.latitude || !citie.longitude) {
        // Faz o throw pois somente um registro é verificado
        throw new Error(`Model Cities - Register id '${citie.id}' incomplete, please update with Latitude/Longitude`)
      }

      WeatherController.getWeather(citie)
    } catch (error) {
      logger.error(`[${new Date()}] [CitiesController.checkOneWeather]: ${error.message}`)
    }
  }
}

export default new CitiesController()
