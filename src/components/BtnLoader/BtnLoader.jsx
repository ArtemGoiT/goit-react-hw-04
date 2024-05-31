import css from "./BtnLoader.module.css";

const BtnLoader = ({ onLoadBtn }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onLoadBtn();
  };
  return (
    <button onClick={handleClick} className={css.btn}>
      Load more
    </button>
  );
};
export default BtnLoader;
