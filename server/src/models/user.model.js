const userModel = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    githubId: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    googleId: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    facebookId: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    fortytwoId: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  });

  return User;
};

export default userModel;
