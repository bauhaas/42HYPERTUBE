const commentModel = (sequelize, Sequelize) => {
  const Comment = sequelize.define('Comment', {
    content: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    UserId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    MovieId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  return Comment;
};

export default commentModel;
