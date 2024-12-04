import { useState } from 'react';
import { useGlobalContext } from './Context';

// Component that handles the image search functionality
const SearchForm = () => {
  // State to manage the search input value
  const { searchValue, setSearchValue } = useGlobalContext();

  const [searchTerm, setSearchTerm] = useState(searchValue); // Initialize with global value

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newValue = searchTerm.trim();
    if (!newValue) return; // Prevent empty searches
    setSearchValue(newValue);
    setSearchTerm(''); // Clear input after submission
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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type='submit' className='btn'>
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
