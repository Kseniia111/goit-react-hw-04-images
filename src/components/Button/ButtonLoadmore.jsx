import css from './ButtonLoadMore.module.css';

const ButtonLoadMore = ({ onLoadMore }) => (
  <button type="button" className={css.ButtonLoadMore} onClick={onLoadMore}>
    Load more
  </button>
);

export default ButtonLoadMore;
