module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    }
  },
  {
      timestamps: false,
      tableName: 'categories',
      underscored: true,
    }
  );

  return Categories;
};