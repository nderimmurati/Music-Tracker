module.exports = (sequelize, _DataTypes) => {
    const Bookmark = sequelize.define('Bookmark', {})
  
    Bookmark.associate = function (models) {
      Bookmark.belongsTo(models.User)
      Bookmark.belongsTo(models.Song)
    }
  
    return Bookmark
  }
  