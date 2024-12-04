import { useState } from 'react';
import { toast } from 'react-toastify';

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
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
    </form>
  );
};

export default SearchForm;
