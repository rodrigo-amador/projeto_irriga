import Sequelize from 'sequelize'

class Weather extends Sequelize.Model {
  static init (sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
        },
        cities_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          references: {
            model: 'cities',
            key: 'id'
          }
        },
        time_now: {
          type: Sequelize.DATE,
          allowNull: false
        },
        temperature_now: {
          type: Sequelize.DECIMAL(4, 2),
          allowNull: false
        },
        temperature_min: {
          type: Sequelize.DECIMAL(4, 2),
          allowNull: false
        },
        temperature_max: {
          type: Sequelize.DECIMAL(4, 2),
          allowNull: false
        },
        wind_speed: {
          type: Sequelize.DECIMAL(5, 2),
          allowNull: false
        },
        sunrise: {
          type: Sequelize.DATE,
          allowNull: false
        },
        sunset: {
          type: Sequelize.DATE,
          allowNull: false
        }
      },
      {
        createdAt: false,
        updatedAt: false,
        tableName: 'weather',
        sequelize
      }
    )

    return this
  }
}
export default Weather
