import { useState } from 'react';

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue);
    setSearchValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='search'
        id=''
        placeholder='cat'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type='submit'>Search</button>
    </form>
  );
};

export default SearchForm;
