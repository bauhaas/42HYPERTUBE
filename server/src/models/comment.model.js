const commentModel = (sequelize, Sequelize) => {
  const Comment = sequelize.define('Comment', {
    content: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Comment;
};

export default commentModel;
