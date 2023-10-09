import css from './ButtonLoadMore.module.css';

const ButtonLoadMore = ({ onClick }) => (
  <button type="button" className={css.ButtonLoadMore} onClick={onClick}>
    Load more
  </button>
);

export default ButtonLoadMore;
