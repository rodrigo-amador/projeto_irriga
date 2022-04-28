import Axios from 'axios'
import 'dotenv/config'

class OpenWeatherProvider {
  async getWeather (latitude, longitude, citieId) {
    try {
      /**
       * Constante responsavel por popular os parametros que serão enviados a API do OpenWeather
       * @latitude string que vem do registro da cidade 
       * @longitude string que vem do registro da cidade
       * @appid secret key fornecida na documentação da Irriga
       * @units string que informa o tipo de retorno para os campos de unidade (metric da o retorno: temperatura em celsius e velocidade em m/s)
       * @lang string que informa a linguagem de retorno da api (pt_br retorna Portugues BR)
       */

      const params = {
        lat: latitude,
        lon: longitude,
        appid: process.env.API_APP_ID,
        units: 'metric',
        lang: 'pt_br'
      }

      const res = await Axios.get(process.env.API_URL, { params })

      // Valida se teve retorno, em casos de Bad Request ou Sem acesso (secret key vencida ou inexistente) cai direto no catch
      if (!res.data) {
        throw new Error(`Model Citie register id '${citieId}': Could not get return from API with latitude=${latitude} and longitude=${longitude} provided`)
      }

      return res.data
    } catch (error) {
      throw new Error(`[OpenWeatherProvider] [getWeather] -> ${error.message}`)
    }
  }
}

export default new OpenWeatherProvider()
