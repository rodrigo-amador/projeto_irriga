import Weather from '../models/weather'
import OpenWeatherProvider from '../providers/openWeather'
import logger from '../config/logger'

class WeatherController{

  // Função responsavel por chamar o Provider getWeather e criar o registro no BD com o retorno do provider
  async getWeather (citie) {
    try {
      // Chama o Provider responsavel por fazer a pesquisa na API do openweathermap
      const returnWeather = await OpenWeatherProvider.getWeather(citie.latitude, citie.longitude, citie.id)

      // Pega o horário atual considerando o GMT da cidade
      let timeNow = new Date()
      timeNow.setHours(timeNow.getHours() + citie.gmt)

      // Cria o registro no BD
      Weather.create({
        cities_id: citie.id,
        time_now: timeNow,
        temperature_now: returnWeather.main.temp,
        temperature_min: returnWeather.main.temp_min,
        temperature_max: returnWeather.main.temp_max,
        wind_speed: returnWeather.wind.speed,
        sunrise: new Date(returnWeather.sys.sunrise * 1000 + (citie.gmt * 3600000)), // sys.sunrise está em UNIX
        sunset: new Date(returnWeather.sys.sunset * 1000 + (citie.gmt * 3600000))
      })
    } catch (error) {
      logger.error(`[${new Date()}] [WeatherController] [getWeather] -> ${error.message}`)
    }
  }
}

export default new WeatherController()
