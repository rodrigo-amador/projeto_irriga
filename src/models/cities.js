import Sequelize from 'sequelize'

class Cities extends Sequelize.Model {
  static init (sequelize) {
    return super.init({
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      latitude: {
        type: Sequelize.STRING(50)
      },
      longitude: {
        type: Sequelize.STRING(50)
      },
      gmt: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    }, {
      createdAt: false,
      updatedAt: false,
      tableName: 'cities',
      sequelize
    })
  }
}
export default Cities
