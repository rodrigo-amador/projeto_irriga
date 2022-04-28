import express from 'express'
import Database from './config/dbBoot'
import OpenWeatherJob from './jobs/openWeather'

// Função responsavel por iniciar o express, BD e o Cron (job)
class App {
  constructor () {
    this.server = express()
    this.init()
  }

  async init () {
    await this.database()
    await this.openWeatherJob()
  }

  async database () {
    await new Database().init()
  }

  async openWeatherJob () {
    new OpenWeatherJob().init()
  }
}

export default new App().server
