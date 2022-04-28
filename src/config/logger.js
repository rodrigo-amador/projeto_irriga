import winston from 'winston'
import fs from 'fs'

if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs')
}

try {
  var logger = winston.createLogger({
    transports: [
      new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
        maxsize: 1048576,
        maxFiles: 10,
        colorize: false
      })
    ]
  })
} catch (err) {
  console.log(`Error when creating Logger: ${err.message}`)
}

export default logger
