const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }

ProductTag.init(
  {
    //primary key, null value not allowed, data type integer
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }, 
    // product id, foriegn key product id from product model.
    product_id: {
      type: DataTypes.INTEGER,
      references:{
        model: 'product',
        key: 'id'
      }
    },
    // tag id , refers to foriegn key from tag model.
    tag_id:{
      type: DataTypes.INTEGER,
      references:{
        model: 'tag',
        key: 'id'
      }
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag', //table name
  }
);

module.exports = ProductTag;
