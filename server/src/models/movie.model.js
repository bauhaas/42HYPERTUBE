const movieModel = (sequelize, Sequelize) => {
  const Movie = sequelize.define('Movie', {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Movie;
};

export default movieModel;
