import { useState } from 'react';
import css from './Searchbar.module.css';

function Searchbar({ onHandleSubmit }) {
  const [query, setQuery] = useState('');

  // handleChange = e => {
  //   this.setState({ query: e.currentTarget.value });
  // };

  const onSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return alert('Please, enter a request to start your search!');
    }
    onHandleSubmit(query);
    setQuery('');
  };

  return (
    <header className={css.searchBar}>
      <form className={css.searchForm} onSubmit={onSubmit}>
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.searchFormInput}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={({ target }) => setQuery(target.value)}
        />
      </form>
    </header>
  );
}

export default Searchbar;
