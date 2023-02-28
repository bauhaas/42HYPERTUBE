const commentModel = (sequelize, Sequelize) => {
  const Comment = sequelize.define('Comment', {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Comment;
};

export default commentModel;
