import css from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
  const handleClick = () => {
    openModal(image);
  };
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt.description}
        className={css.ImageCard}
        onClick={handleClick}
      />
    </div>
  );
};
export default ImageCard;
