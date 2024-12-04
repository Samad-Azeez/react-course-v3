import { useState } from 'react';

// Component that handles the image search functionality
const SearchForm = () => {
  // State to manage the search input value
  const [searchValue, setSearchValue] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue);
    setSearchValue(''); // Clear input after submission
  };

  return (
    <section>
      <h1 className='title'>unsplash images</h1>
      {/* Search form with input and submit button */}
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
