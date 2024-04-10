module.exports = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    }
  },
  {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true,
    }
  );

  return PostsCategories;
};