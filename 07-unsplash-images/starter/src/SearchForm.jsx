import { useState } from 'react';

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue);
    setSearchValue('');
  };

  return (
    <section>
      <h1 className='title'>unsplash images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input search-input'
          name='search'
          placeholder='cat'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <button type='submit' className='btn'>
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
