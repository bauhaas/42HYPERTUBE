const Avatar = ({ imageAttribute, imagePath }) => {
  return <img src={`${imagePath}`} className={imageAttribute} alt="avatar" />;
};

export default Avatar;
