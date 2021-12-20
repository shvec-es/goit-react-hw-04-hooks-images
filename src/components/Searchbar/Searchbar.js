import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import s from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [searchName, setSearchName] = useState('');

  const handleChange = e => {
    setSearchName(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchName.trim() === '') {
      toast.warning('Enter word for search');
      return;
    }

    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <header className={s['Searchbar']}>
      <form className={s['SearchForm']} onSubmit={handleSubmit}>
        <button type="submit" className={s['SearchForm-button']}>
          <span className={s['SearchForm-button-label']}>Search</span>
        </button>

        <input
          className={s['SearchForm-input']}
          type="text"
          value={searchName}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  searchName: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default Searchbar;
