import test from 'tape'

import OpenWeatherProvider from '../providers/openWeather'

test('Get Weather Now Provider', (t) => {
  t.assert(OpenWeatherProvider.getWeather('48.0086111111', '17.1097222222', 3), 'API Returned successfully')
  t.end()
})
